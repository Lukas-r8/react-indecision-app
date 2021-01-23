
// let showDetails = true;

// const onDetailsClick = () => {
//     showDetails = !showDetails
//     renderVisibilityApp();
// };

// const renderVisibilityApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onDetailsClick}> {showDetails ? "Hide Details" : "Show Details"}</button>
//             {showDetails && <p>Details presented here</p>}
//         </div>
//     );

//     ReactDOM.render(template, document.getElementById("app"))
// };

// renderVisibilityApp();

class Visibility extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDetails: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState((prev) => {
            return {
                showDetails: !prev.showDetails
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle 2.0</h1>
                <button onClick={this.toggle}>{this.state.showDetails ? "Hide Details" : "Show Details"}</button>
                {this.state.showDetails && <p>details are to be shown here :)</p>}
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));