import {presult, unwrapPresult} from './common/presult.js'
import {starWars} from './common/star-wars.js'

const vaderSearchPromise = presult(starWars('😱😱😱😱/?search=vader'))

const lukeSearch = await starWars('people/?search=luke')
const luke = lukeSearch.results[0]

const lukeFilms = await Promise.all(luke.films.map((/** @type {string} */ film) => starWars(film)))

const vaderSearch = await unwrapPresult(vaderSearchPromise)

console.log(vaderSearch.results[0].name)
console.log(luke.name)
lukeFilms.forEach((film) => console.log(film.title))
