import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }

    submit = (e) => {
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