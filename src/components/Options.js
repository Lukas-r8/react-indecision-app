import Option from './Option'
import React from 'react'

const Options = (props) => {
    const optionsCount = props.options.length;
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button
                    className="button button--link"
                    onClick={props.removeAll}
                >
                    Remove all
                </button>
            </div>
            {
                optionsCount == 0 && <p className="widget__message">Please add an option to get started!</p>
            }
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

export default Options;