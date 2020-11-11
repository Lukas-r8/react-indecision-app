"use strict";

console.log("App.jsx is running!");

var app = {
    title: "Indecision App",
    subtitle: "Indecision info"
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item 1"
        ),
        React.createElement(
            "li",
            null,
            "Item 2"
        ),
        React.createElement(
            "li",
            null,
            "Item 3"
        )
    )
);

var user = {
    name: "Lucas Alves Da Silva",
    age: 29,
    location: "San Sebastian"
};

var myTemplate = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        user.location
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
