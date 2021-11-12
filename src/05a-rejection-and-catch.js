import {starWars} from './common/star-wars.js'

try {
  const fulfilledValue = await starWars('😱😱😱😱/?search=vader')

  console.log(fulfilledValue.results[0].name)
} catch (/** @type {any} */ rejectedError) {
  console.log(rejectedError.message)
}
