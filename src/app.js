class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.title = "Indecision App"
        this.subtitle = "Put your life in the hands of computer"
        this.state = {
            options: []
        }

        this.addOption = this.addOption.bind(this)
        this.removeAllOptions = this.removeAllOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
    }

    addOption(option) {
        if (!option) {
            return "Enter a valid option"
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists"
        }
        this.setState((prev) => {
            return {
                options: prev.options.concat(option)
            }
        })
    }

    removeAllOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handlePick() {
        const randomIndex = Math.floor(Math.random() * this.state.options.length)
        alert(this.state.options[randomIndex]);
    }

    render() {
        return (
            <div>
                <Header title={this.title} subtitle={this.subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    removeAll={this.removeAllOptions}
                />
                <AddOption addOption={this.addOption} />
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
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.removeAll}>Remove all</button>
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
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
        this.state = {
            error: undefined
        }
    }

    submit(e) {
        e.preventDefault();
        const option = e.target.elements.addOption.value.trim()
        e.target.elements.addOption.value = "" 
        const error = this.props.addOption(option)
        this.setState(() => {
            return { error };
        })
    }

    render() {
        return (
            <div>
                {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
                <form onSubmit={this.submit}>
                    <input type="text" name="addOption" />
                    <button type="submit">Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))