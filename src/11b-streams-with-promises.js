import assert from 'assert'
import {starWarsStream} from './common/star-wars.js'

const peopleStream = await starWarsStream('people/')
assert(peopleStream != null)

let peopleData = ''

for await (const chunk of peopleStream) {
  peopleData += chunk.toString()
}

const peopleDataJson = JSON.parse(peopleData)

const people = peopleDataJson.results

console.log(people.length)
if (peopleDataJson.next) {
  console.log('now we need to get to...', peopleDataJson.next)
}
