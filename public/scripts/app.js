"use strict";

console.log("App.jsx is running!");
// babel src/app.jsx --out-file public/scripts/app.js --presets=env,react --watch
var app = {
    title: "Indecision App",
    subtitle: "Indecision info",
    options: []
};

// console.log(app.options?.lenght);

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? "Here are your options:" : "No options available"
    ),
    React.createElement(
        "ol",
        null,
        app.options.map(function (option, index) {
            return React.createElement(
                "li",
                { key: index },
                option
            );
        })
    )
);

var user = {
    name: "Lucas Alves Da Silva",
    age: 29,
    location: "San Sebastian"
};

function getLocation(location) {
    return location != null ? React.createElement(
        "p",
        null,
        "Location: ",
        location
    ) : undefined;
}

var myTemplate = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : "Anonymous"
    ),
    user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
