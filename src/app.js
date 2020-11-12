class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision App"
        const subtitle = "Put your life in the hands of computer"
        const options = ["thing one", "thing two", "thing three", "four"]

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>you have {this.props.options.length} options</p>
                {this.props.options.map((item, index) => <Option key={index} item={item} />)}
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.item}</p>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <p>Add Option</p>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))