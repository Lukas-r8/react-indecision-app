import React from 'react';
import ReactDOM from 'react-dom'
import { startCursor } from './cursor.js'

const template = <h1>My h1 tag :)</h1>
ReactDOM.render(template, document.getElementById('app'))


setTimeout(startCursor, 5000)