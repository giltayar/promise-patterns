import assert from 'assert'
import {starWarsStream} from './common/star-wars.js'

/** @type {any[]} */
let people = []
let url = 'people/'
do {
  const peopleStream = await starWarsStream(url)
  assert(peopleStream != null)

  let peopleData = ''
  for await (const chunk of peopleStream) {
    peopleData += chunk.toString()
  }

  const peopleDataJson = JSON.parse(peopleData)

  url = peopleDataJson.next
  people = [...people, ...JSON.parse(peopleData).results]
} while (url)

console.log(people.length)
