import {starWars} from './common/star-wars.js'

const vaderSearchPromise = starWars('people/?search=vader')

const lukeSearch = await starWars('people/?search=luke')

const lukeFilms = await Promise.all(
  lukeSearch.results[0].films.map((/** @type {string} */ film) => starWars(film)),
)

const vaderSearch = await vaderSearchPromise

console.log(vaderSearch.results[0].name)
console.log(lukeSearch.results[0].name)
lukeFilms.forEach((film) => console.log(film.title))
