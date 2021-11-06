import {starWars} from './common/star-wars.js'

const vaderSearchPromise = starWars('people/?search=vader')

const {
  results: [luke],
} = await starWars('people/?search=luke')

const lukeFilms = await Promise.all(luke.films.map((/** @type {string} */ film) => starWars(film)))

const vaderSearch = await vaderSearchPromise

console.log(vaderSearch.results[0].name)
console.log(luke.name)
lukeFilms.forEach((film) => console.log(film.title))
