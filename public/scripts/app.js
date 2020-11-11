"use strict";

console.log("App.jsx is running!");
// babel src/app.jsx --out-file public/scripts/app.js --presets=env,react --watch
var app = {
    title: "Indecision App",
    subtitle: "Indecision info",
    options: []
};

// console.log(app.options?.lenght);

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
    }

    renderApp();
};

var resetOptions = function resetOptions() {
    app.options = [];
    renderApp();
};

var onMakeDecision = function onMakeDecision() {
    var randomNumber = Math.floor(Math.random() * app.options.length);
    alert(app.options[randomNumber]);
};

var appRoot = document.getElementById("app");

var renderApp = function renderApp() {
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
            "p",
            null,
            "You have ",
            app.options.length,
            " options."
        ),
        React.createElement(
            "button",
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            "What should I do now?"
        ),
        React.createElement(
            "button",
            { onClick: resetOptions },
            "Reset options"
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
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
