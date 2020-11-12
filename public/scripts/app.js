"use strict";

var showDetails = true;

var onDetailsClick = function onDetailsClick() {
    showDetails = !showDetails;
    renderVisibilityApp();
};

var renderVisibilityApp = function renderVisibilityApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: onDetailsClick },
            " ",
            showDetails ? "Hide Details" : "Show Details"
        ),
        showDetails && React.createElement(
            "p",
            null,
            "Details presented here"
        )
    );

    ReactDOM.render(template, document.getElementById("app"));
};

renderVisibilityApp();
