import fetch from 'node-fetch'

/** @param {string} path */
export async function starWars(path) {
  const response = await fetch(new URL(path, 'https://swapi.dev/api/').href)

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`)
  }

  return /** @type {any} */ (await response.json())
}
