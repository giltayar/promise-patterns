import {starWars} from './common/star-wars.js'
import {makeOptimizedMutex} from './common/mutex.js'
// eslint-disable-next-line node/no-missing-import
import {setTimeout} from 'timers/promises'

const mutex = makeOptimizedMutex()

const people = await Promise.all([
  getInformationAboutPerson('Luke Skywalker'),
  getInformationAboutPerson('Darth Vader'),
  getInformationAboutPerson('Han Solo'),
  getInformationAboutPerson('Leia Organa'),
])

for (const person of people) {
  console.log(person.name)
}

/** @param {string} person */
async function getInformationAboutPerson(person) {
  await mutex.lock()
  try {
    const personSearch = await starWars(`people/?search=${encodeURIComponent(person)}`)
    await setTimeout(500)

    return personSearch.results[0]
  } finally {
    await mutex.unlock()
  }
}
