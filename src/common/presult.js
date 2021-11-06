/**
 * @template T
 * @template TErr
 * @param {Promise<T>} promise
 * @returns {Promise<[undefined, T] | [TErr, undefined]>}
 */
export async function presult(promise) {
  try {
    const value = await promise

    return [undefined, value]
  } catch (/** @type {any} */ err) {
    return [err, undefined]
  }
}

/**
 * @template T
 * @template TErr
 * @param {Promise<[err: TErr | undefined, value: T | undefined]>} presultPromise
 * @returns {Promise<T | Promise<never>>}
 */
export async function unwrapPresult(presultPromise) {
  const [err, value] = await presultPromise

  if (err) {
    throw err
  } else {
    return /** @type {T} */ (value)
  }
}
