export function makeMutex() {
  /** @type {Promise<void> | undefined} */
  let latestLock

  /** @returns {Promise<() => void>} */
  return async function lock() {
    /** @type {((value: any) => void) | undefined} */
    let nakedResolve

    /* @type {Promise<void> | undefined} */
    const currLatestLock = latestLock

    latestLock = new Promise((resolve) => (nakedResolve = resolve))

    await currLatestLock

    return function unlock() {
      nakedResolve?.(undefined)
    }
  }
}
