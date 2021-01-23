class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of computer";
        const options = ["thing one", "thing two", "thing three", "four"];

        return React.createElement(
            "div",
            null,
            React.createElement(Header, { title: title, subtitle: subtitle }),
            React.createElement(Action, null),
            React.createElement(Options, { options: options }),
            React.createElement(AddOption, null)
        );
    }
}

class Header extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                this.props.title
            ),
            React.createElement(
                "h2",
                null,
                this.props.subtitle
            )
        );
    }
}

class Action extends React.Component {
    handlePick() {
        console.log("Handle pick..........");
    }

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "button",
                { onClick: this.handlePick },
                "What should I do?"
            )
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.removeAll = this.removeAll.bind(this);
    }

    removeAll() {
        alert(`remove all clicked... ${this.props.options}`);
    }

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "button",
                { onClick: this.removeAll },
                "Remove all"
            ),
            React.createElement(
                "p",
                null,
                "you have ",
                this.props.options.length,
                " options"
            ),
            this.props.options.map((item, index) => React.createElement(Option, { key: index, item: item }))
        );
    }
}

class Option extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                this.props.item
            )
        );
    }
}

class AddOption extends React.Component {
    submit(e) {
        e.preventDefault();
        let value = e.target.elements.addOption.value.trim();
        if (value) {
            alert(value);
        }
    }

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "form",
                { onSubmit: this.submit },
                React.createElement("input", { type: "text", name: "addOption" }),
                React.createElement(
                    "button",
                    { type: "submit" },
                    "Add Option"
                )
            )
        );
    }
}

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
