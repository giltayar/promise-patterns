export function makeMutex() {
  /** @type {Promise<any> | undefined} */
  let theLock
  /** @type {((value: any) => void) | undefined} */
  let nakedResolve
  return {
    /** @returns {Promise<void>} */
    async lock() {
      if (!theLock) {
        theLock = new Promise((resolve) => (nakedResolve = resolve))
      } else {
        await theLock
        await this.lock()
      }
    },
    unlock() {
      if (theLock) {
        nakedResolve?.(undefined)
        nakedResolve = undefined
        theLock = undefined
      }
    },
  }
}
