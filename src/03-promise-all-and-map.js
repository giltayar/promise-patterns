import {starWars} from './common/star-wars.js'

{
  const people = ['luke', 'leia', 'vader', 'solo']

  const peopleSearches = await Promise.all(people.map((name) => starWars(`people/?search=${name}`)))

  peopleSearches.forEach((personSearch) => console.log(personSearch.results[0].name))
}

// From data
{
  const lukeSearch = await starWars(`people/?search=luke`)
  const lukeFilms = lukeSearch.results[0].films

  const films = await Promise.all(lukeFilms.map((/** @type {string} */ film) => starWars(film)))

  for (const film of films) console.log(film.title)
}
