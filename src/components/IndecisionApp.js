import React from 'react'

import { startCursor } from './../cursor.js'

import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: []
        }
        this.addOption = this.addOption.bind(this)
        this.removeAllOptions = this.removeAllOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.deleteOption = this.deleteOption.bind(this)
    }

    componentDidMount() {
        try {
            const strOptions = localStorage.getItem('options');
            const options = JSON.parse(strOptions) || [];
            this.setState(() => ({ options }))
        } catch (e) {
            console.error("failed to parse");
        }
        startCursor();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length != this.state.options.length) {
            localStorage.setItem('options', JSON.stringify(this.state.options))
        }

        startCursor();
    }

    addOption(option) {
        if (!option) {
            return "Enter a valid optionm"
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
 