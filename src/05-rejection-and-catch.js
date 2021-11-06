import {starWars} from './promise-patterns.js'

try {
  await starWars('😱😱😱😱/?search=vader')
} catch (/** @type {any} */ err) {
  console.log(err.message)
}

// Using promises
starWars('😱😱😱😱/?search=vader').catch((err) => console.log(err.message))

