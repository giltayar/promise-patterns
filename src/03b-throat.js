import {starWars} from './common/star-wars.js'
import throat from 'throat'

const {
  results: [luke],
} = await starWars(`people/?search=luke`)

const films = await Promise.all(
  luke.films.map(throat(2, (/** @type {string} */ film) => starWars(film))),
)

for (const film of films) {
  console.log(film.title)
}
