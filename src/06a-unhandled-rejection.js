import {starWars} from './common/star-wars.js'

starWars('😱😱😱😱/?search=vader')

console.log('this happens before the rejection')

await starWars('/people')

console.log(`but this doesn't`)
