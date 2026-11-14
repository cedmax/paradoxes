interface Tracker {
  track: (event: string, data: Record<string, string>) => void
}

interface Options {
  retry?: (run: () => void) => void
  maxRetries?: number
  maxQueued?: number
}

// Buffer only while the existing loader starts. Never load analytics or persist visitor data.
export function createDeferredTracker(
  getTracker: () => Tracker | undefined,
  options: Options = {},
) {
  const { retry = (run) => setTimeout(run, 250), maxRetries = 20, maxQueued = 100 } = options
  let queue: { event: string; data: Record<string, string> }[] = []
  let scheduled = false
  let retries = 0

  function flush() {
    const tracker = getTracker()
    if (tracker) {
      const batch = queue
      queue = []
      for (const { event, data } of batch) {
        try {
          tracker.track(event, data)
        } catch {
          // Analytics must never interrupt the illustration or replay a partially sent batch.
        }
      }
    } else if (retries >= maxRetries) {
      queue = []
    } else if (queue.length && !scheduled) {
      scheduled = true
      retry(() => {
        scheduled = false
        retries++
        flush()
      })
    }
  }

  return {
    track(event: string, data: Record<string, string>) {
      if (queue.length < maxQueued) queue.push({ event, data: { ...data } })
      flush()
    },
    clear() {
      queue = []
    },
  }
}
