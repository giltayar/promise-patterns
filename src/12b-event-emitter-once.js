import {EventEmitter, once} from 'events'
import {starWars} from './common/star-wars.js'

const r2d2 = new EventEmitter()

// before the movie
r2d2.addListener('clean', () => {
  console.log(`help me, obi wan, you're my only hope`)
})

// the movie plot
setTimeout(async () => {
  await starWars('people/?search=r2')
  await starWars('people/?search=luke')

  r2d2.emit('clean')
})

await once(r2d2, 'clean')

console.log('the rest of star wars occurs here. Yay!')
