class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: props.options
        }
        this.addOption = this.addOption.bind(this)
        this.removeAllOptions = this.removeAllOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.deleteOption = this.deleteOption.bind(this)
    }

    componentDidMount() {
        startCursor();
        console.log("cursor running");
    }

    componentDidUpdate() {
        startCursor();
        console.log("cursor running updating");
    }

    addOption(option) {
        if (!option) {
            return "Enter a valid option"
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists"
        }
        this.setState((prev) => ({ options: prev.options.concat(option) }))
    }

    deleteOption(option) {
        this.setState(() => ({
            options: this.state.options.filter(o => o !== option)
        }));
    }

    removeAllOptions() {
        this.setState(() => ({ options: [] }))
    }

    handlePick() {
        const randomIndex = Math.floor(Math.random() * this.state.options.length)
        alert(this.state.options[randomIndex]);
    }

    render() {
        return (
            <div>
                <Header />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    removeAll={this.removeAllOptions}
                    deleteOption={this.deleteOption}
                />
                <AddOption addOption={this.addOption} />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
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
        this.setState(() => ({ error }))
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

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of computer"
}

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
                </button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.removeAll}>Remove all</button>
            <p>you have {props.options.length} options</p>
            {props.options.map((item, index) => (
                <Option
                    key={index}
                    item={item}
                    deleteOption={props.deleteOption}
                />
            ))}
        </div>
    )
}

const Option = (props) => {
    const handleRemove = () => {
        props.deleteOption(props.item)
    }

    return (
        <div>
            {props.item}
            <button onClick={handleRemove}>remove option</button>
        </div>
    );
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))