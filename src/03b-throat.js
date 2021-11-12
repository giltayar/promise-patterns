import {starWars} from './common/star-wars.js'
import throat from 'throat'

const lukeSearch = await starWars(`people/?search=luke`)
const lukeFilms = lukeSearch.results[0].films

const films = await Promise.all(
  lukeFilms.map(throat(2, (/** @type {string} */ film) => starWars(film))),
)

for (const film of films) console.log(film.title)
