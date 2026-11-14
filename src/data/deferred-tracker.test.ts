import assert from "node:assert/strict"
import { test } from "node:test"
import { createDeferredTracker } from "./deferred-tracker.ts"

test("a late tracker receives the view before its interaction, once each", () => {
  const jobs: (() => void)[] = []
  const sent: string[] = []
  let ready = false
  const tracker = createDeferredTracker(
    () => (ready ? { track: (event) => sent.push(event) } : undefined),
    { retry: (run) => jobs.push(run) },
  )
  tracker.track("view", { figure: "example" })
  tracker.track("interact", { figure: "example" })
  assert.equal(jobs.length, 1)
  ready = true
  jobs.shift()?.()
  tracker.track("reveal", { figure: "example" })
  assert.deepEqual(sent, ["view", "interact", "reveal"])
})

test("a blocked loader has bounded retries and memory", () => {
  const jobs: (() => void)[] = []
  const sent: string[] = []
  let ready = false
  const tracker = createDeferredTracker(
    () => (ready ? { track: (event) => sent.push(event) } : undefined),
    { retry: (run) => jobs.push(run), maxRetries: 3, maxQueued: 2 },
  )
  tracker.track("view", {})
  tracker.track("interact", {})
  tracker.track("overflow", {})
  for (let i = 0; i < 3; i++) jobs.shift()?.()
  assert.equal(jobs.length, 0)
  tracker.track("still blocked", {})
  assert.equal(jobs.length, 0)
  ready = true
  tracker.track("new event", {})
  assert.deepEqual(sent, ["new event"])
})

test("clearing on page exit discards queued events and transport failures do not escape", () => {
  const jobs: (() => void)[] = []
  let calls = 0
  let ready = false
  const tracker = createDeferredTracker(
    () =>
      ready
        ? {
            track: () => {
              calls++
              throw new Error("blocked")
            },
          }
        : undefined,
    { retry: (run) => jobs.push(run) },
  )
  tracker.track("view", {})
  tracker.clear()
  ready = true
  jobs.shift()?.()
  assert.equal(calls, 0)
  assert.doesNotThrow(() => tracker.track("new event", {}))
  assert.equal(calls, 1)
})
