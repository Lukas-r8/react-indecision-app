import React from 'react';
import ReactDOM from 'react-dom'

const template = React.createElement('h1', {onLoad: startCursor}, "dummy text !!!!!!!");
console.log("hi");
ReactDOM.render(template, document.getElementById('app'))

