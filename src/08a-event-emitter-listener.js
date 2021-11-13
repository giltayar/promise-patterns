import {EventEmitter} from 'events'
import {starWars} from './common/star-wars.js'

const r2d2 = new EventEmitter()

// before the movie
r2d2.addListener('clean', () => {
  console.log(`help me, obi wan, you're my only hope`)

  console.log('the rest of star wars occurs here. Uggghhh!')
})

// the movie plot
setTimeout(async () => {
  await starWars('people/?search=r2')
  await starWars('people/?search=luke')

  r2d2.emit('clean')
}, 1000)
