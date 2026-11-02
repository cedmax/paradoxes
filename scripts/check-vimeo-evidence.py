import concurrent.futures, json, urllib.request, urllib.parse, subprocess
VIDEOS={"slinky-edgertronic":"72530360","slinky-nomad":"175749564","archery-bogenbauer":"236980868","archery-richard":"343696096","mcgurk-mark-shevy":"200587571","mcgurk-twig":"80080582","mcgurk-twig-2":"71908995","hollow-mask":"133346601","hollow-digital":"117679543","hollow-artist":"311106626","chain-thinking-digital":"98532228","chain-string":"116904791","monkey-reupload":"420378566","monkey-another":"66262795","sugihara-reupload":"11946779","dzhanibekov-axis":"213210740"}
def get_json(url):
    req=urllib.request.Request(url,headers={"User-Agent":"Mozilla/5.0 (compatible; VideoProvenanceCheck/1.0)","Accept":"application/json"})
    with urllib.request.urlopen(req,timeout=12) as resp:
        return json.load(resp)
def check(item):
    label,id=item
    row={"candidate":label,"url":"https://vimeo.com/"+id}
    try:
        d=get_json("https://vimeo.com/api/oembed.json?"+urllib.parse.urlencode({"url":row["url"]}))
        row["oembed"]={k:d.get(k) for k in ["title","author_name","author_url","width","height","duration","upload_date","video_id"]}
    except Exception as e: row["oembed_error"]=repr(e)
    try:
        d=get_json("https://player.vimeo.com/video/"+id+"/config")
        video=d.get("video",{})
        progressive=d.get("request",{}).get("files",{}).get("progressive",[])
        row["player"]={"width":video.get("width"),"height":video.get("height"),"progressive":[{"quality":f.get("quality"),"width":f.get("width"),"height":f.get("height")} for f in progressive]}
    except Exception as e: row["config_error"]=repr(e)
    try:
        p=subprocess.run(["yt-dlp","--no-playlist","--no-warnings","-J",row["url"]],capture_output=True,text=True,timeout=35)
        if p.returncode:
            row["yt_dlp_error"]=p.stderr[-400:]
        else:
            d=json.loads(p.stdout)
            streams=[f for f in d.get("formats",[]) if f.get("height") and f.get("vcodec") not in ("none",None)]
            row["yt_dlp"]={"uploader":d.get("uploader"),"width":d.get("width"),"height":d.get("height"),"qualities":sorted({f.get("height") for f in streams})}
    except Exception as e: row["yt_dlp_error"]=repr(e)
    return row
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:
    for row in pool.map(check,VIDEOS.items()):
        print("VIMEO_CHECK "+json.dumps(row,ensure_ascii=False),flush=True)
