import {starWars} from './common/star-wars.js'

{
  const people = ['luke', 'leia', 'vader', 'solo']

  const peoplePromises = people.map((name) => starWars(`people/?search=${name}`))

  const peopleSearches = await Promise.all(peoplePromises)

  for (const personSearch of peopleSearches) {
    console.log(personSearch.results[0].name)
  }
}

// Shorter
{
  const people = ['luke', 'leia', 'vader', 'solo']

  const peopleSearches = await Promise.all(people.map((name) => starWars(`people/?search=${name}`)))

  for (const personSearch of peopleSearches) {
    console.log(personSearch.results[0].name)
  }
}

// From data
{
  const LukeSearch = await starWars(`people/?search=luke`)

  const luke = LukeSearch.results[0]

  const films = await Promise.all(luke.films.map((/** @type {string} */ film) => starWars(film)))

  for (const film of films) {
    console.log(film.title)
  }
}

// Shorter
{
  const {
    results: [luke],
  } = await starWars(`people/?search=luke`)

  const films = await Promise.all(luke.films.map((/** @type {string} */ film) => starWars(film)))

  for (const film of films) {
    console.log(film.title)
  }
}
