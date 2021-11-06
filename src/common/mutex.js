export function makeMutex() {
  let locked = false
  return {
    lock() {
      return new Promise((resolve) => {
        if (locked) {
          setTimeout(() => this.lock().then(resolve), 0)
        } else {
          locked = true
          resolve(undefined)
        }
      })
    },
    unlock() {
      locked = false
    },
  }
}

export function makeOptimizedMutex() {
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
        return await theLock.then(() => this.lock())
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
