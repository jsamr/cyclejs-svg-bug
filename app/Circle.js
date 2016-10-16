import { div, svg } from '@cycle/dom'
import xs from 'xstream'

function view () {
  const resourceUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Emblem_of_the_United_Nations.svg/705px-Emblem_of_the_United_Nations.svg.png'
  return xs.of(div('#Circle', {style: {width: '100%', height: '100%', display: 'flexbox'}}, [
    svg({attrs: {width: '100%', height: '400'}}, [
      svg.defs({}, [
        svg.pattern({
          attrs: {
            id: 'circle-bg',
            preserveAspectRatio: 'xMidYMid slice',
            viewBox: '0 0 1 1',
            patternContentUnits: 'objectBoundingBox',
            height: '100%',
            width: '100%'
          }
        }, [
          svg.image({
            attrs: {
              x: '0',
              y: '0',
              height: '1',
              width: '1',
              'xlink:href': resourceUrl,
              preserveAspectRatio: 'xMidYMid slice'
            }
          }, [])
        ])
      ]),
      svg.circle({
        attrs: {
          'cx': '50%',
          'cy': '50%',
          'r': '150',
          'stroke': 'white',
          'stroke-width': '2',
          'fill': 'url(#circle-bg)'
        }
      })
    ])
  ]))
}

/**
 * @returns {{DOM: stream}}
 */
function Circle () {
  const vdom$ = view()
  return {
    DOM: vdom$
  }
}

export default Circle
