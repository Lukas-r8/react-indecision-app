class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.addOne = this.addOne.bind(this)
        this.subtractOne = this.subtractOne.bind(this)
        this.reset = this.reset.bind(this)
    }

    componentDidMount() {
        const count = parseInt(localStorage.getItem('count'))
        if (!Number.isNaN(count)) {
            this.setState(() => ({ count }))
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count != this.state.count) {
            localStorage.setItem('count', this.state.count)
        }
    }

    addOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    subtractOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }

    reset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.subtractOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById("app"))

// let count = 0

// const handleAddOne = () => {
//     count++;
//     renderCounterApp();
// };

// const handleMinusOne = () => {
//     count--;
//     renderCounterApp();
// };

// const handleReset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById("app");

// const renderCounterApp = () => {
//     const counterTemplate = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={handleAddOne}>+1</button>
//             <button onClick={handleMinusOne}>-1</button>
//             <button onClick={handleReset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(counterTemplate, appRoot)
// }

// renderCounterApp();