/**
 * @template T
 * @param {Promise<T>} promise
 * @returns {Promise<[undefined, T] | [Error, undefined]>}
 */
export function presult(promise) {
  return promise.then(
    (v) => [undefined, v],
    (e) => [e, undefined],
  )
}
