/**
 * A wrapper around a try/catch clause
 *
 * @template T
 * @param {() => T} f
 * @returns {[error: Error, result: undefined] | [error: undefined, result: T]}
 */
export function sresult(f) {
  try {
    return [undefined, f()]
  } catch (error) {
    return [/** @type {Error} */ (error), undefined]
  }
}
