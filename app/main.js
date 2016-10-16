import { makeDOMDriver } from '@cycle/dom'
import Cycle from '@cycle/xstream-run'

import Circle from './Circle'

/**
 * A stream from xstream library
 * @typedef {Array} stream
 */

Cycle.run(Circle, {
  DOM: makeDOMDriver('#app')
})
