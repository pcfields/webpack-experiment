import { join } from 'lodash'
import './styles.css'
import webpackLogo from './img/webpack-logo.svg'

import Data from './data.xml'
import Notes from './data.csv'

function component() {
    const element = document.createElement('div')

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = join(['Hello', 'webpack'], ' ')
    element.classList.add('hello')

    const logo = new Image()
    logo.src = webpackLogo
    element.appendChild(logo)

    console.log({ Data })
    console.log({ Notes })

    return element
}

document.body.appendChild(component())
// document.body.appendChild()
