import {starWars} from './common/star-wars.js'
import {makeMutex} from './common/mutex.js'
// eslint-disable-next-line node/no-missing-import
import {setTimeout} from 'timers/promises'

const mutexLock = makeMutex()

const people = await Promise.all([
  getInformationAboutPerson('Luke Skywalker'),
  getInformationAboutPerson('Darth Vader'),
  getInformationAboutPerson('Han Solo'),
  getInformationAboutPerson('Leia Organa'),
])

people.forEach((person) => console.log(person.name))

/** @param {string} person */
async function getInformationAboutPerson(person) {
  const unlock = await mutexLock()
  try {
    const personSearch = await starWars(`people/?search=${encodeURIComponent(person)}`)
    await setTimeout(500)

    return personSearch.results[0]
  } finally {
    unlock()
  }
}
