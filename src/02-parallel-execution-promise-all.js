import {starWars} from './common/star-wars.js'

{
  const lukeSearchPromise = starWars('people/?search=luke')
  const vaderSearchPromise = starWars('people/?search=vader')

  const searches = await Promise.all([lukeSearchPromise, vaderSearchPromise])

  const lukeSearch = searches[0]
  const vaderSearch = searches[1]

  console.log(lukeSearch.results[0].name)
  console.log(vaderSearch.results[0].name)
}

// Shorter:
{
  const searches = await Promise.all([
    starWars('people/?search=luke'),
    starWars('people/?search=vader'),
  ])

  const lukeSearch = searches[0]
  const vaderSearch = searches[1]

  console.log(lukeSearch.results[0].name)
  console.log(vaderSearch.results[0].name)
}

// Even shorter
{
  const [lukeSearch, vaderSearch] = await Promise.all([
    starWars('people/?search=luke'),
    starWars('people/?search=vader'),
  ])

  console.log(lukeSearch.results[0].name)
  console.log(vaderSearch.results[0].name)
}
