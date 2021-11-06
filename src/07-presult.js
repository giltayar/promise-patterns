import {starWars} from './common/star-wars.js'
import {presult} from './common/presult.js'

// kludgy without presult
{
  let lukeSearch
  try {
    lukeSearch = await starWars('😱😱😱😱/?search=luke')
  } catch (error) {
    try {
      lukeSearch = await starWars('people/?search=leia')
    } catch (/** @type {any} */ error) {
      console.log(error.message)
    }
  }
  console.log(lukeSearch.results[0].name)
}

// with presult
{
  const [lukeError, lukeSearch] = await presult(starWars('😱😱😱😱/?search=luke'))

  if (lukeError) {
    const [lukeError2, lukeSearch2] = await presult(starWars('people/?search=leia'))

    if (lukeError2) {
      console.log(lukeError2.message)
    } else {
      console.log(lukeSearch2.results[0].name)
    }
  } else {
    console.log(lukeSearch.results[0].name)
  }
}

// coolness
{
  const [lukeError, lukeSearch] = await presult(starWars('😱😱😱😱/?search=luke'))
  const [lukeError2, lukeSearch2] = lukeError
    ? await presult(starWars('people/?search=leia'))
    : [undefined, lukeSearch]

  if (lukeError2) {
    console.log(lukeError2.message)
  } else {
    console.log(lukeSearch2.results[0].name)
  }
}
