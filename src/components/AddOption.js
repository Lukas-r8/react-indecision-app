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
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.submit}>
                    <input className="add-option__input" type="text" name="addOption" />
                    <button className="button" type="submit">Add Option</button>
                </form>
            </div>
        )
    }
}