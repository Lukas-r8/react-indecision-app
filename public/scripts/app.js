"use strict";

console.log("Hellow world!!!!");

var template = React.createElement(
  "p",
  null,
  "This is JSX from app.js!22"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
