import { join } from 'lodash'
import './styles.css'
import webpackLogo from './img/webpack-logo.svg'

import Data from './data/data.xml'
import Notes from './data/data.csv'

import toml from './data/data.toml'
import yaml from './data/data.yaml'
import json from './data/data.json5'

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

    console.log({ toml })
    console.log('toml title:', toml.title)
    console.log('toml name:', toml.owner.name)

    console.log({ yaml })
    console.log('yaml title:', yaml.title)
    console.log('yaml name:', yaml.owner.name)

    console.log({ json })
    console.log('json title:', json.title)
    console.log('json name:', json.owner.name)

    return element
}

document.body.appendChild(component())
// document.body.appendChild()
