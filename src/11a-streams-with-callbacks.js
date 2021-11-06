import assert from 'assert'
import {starWarsStream} from './common/star-wars.js'

const peopleStream = await starWarsStream('people/')
assert(peopleStream != null)

let peopleStreamData = ''
peopleStream.on('data', (data) => {
  peopleStreamData += data
})

peopleStream.on('end', () => {
  const people = JSON.parse(peopleStreamData)

  console.log(people.results.length)

  if (people.next) {
    console.log(`and I don't know how to get the rest of the people!`)
  }
})
