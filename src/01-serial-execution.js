import {starWars} from './common/star-wars.js'

const lukeSearch = await starWars('people/?search=luke')

console.log(lukeSearch.results[0].name)

const vaderSearch = await starWars('people/?search=vader')

console.log(vaderSearch.results[0].name)
