import fs from 'fs'
import {sresult} from './common/sresult.js'

const [error, result] = sresult(() => fs.readFileSync('doesnt-exist', 'utf8'))

if (error) {
  console.log(error.message)
} else {
  console.log(result)
}
