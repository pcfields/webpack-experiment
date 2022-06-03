import { join } from 'lodash'
import printMe from './print'

function component() {
    const element = document.createElement('div')
    const button$ = document.createElement('button')

    element.innerHTML = join(['Hello', 'webpack'], ' ')
    element.classList.add('hello')

    button$.innerHTML = 'Click me and check the console'
    button$.onclick = printMe
    element.appendChild(button$)

    return element
}

document.body.appendChild(component())
