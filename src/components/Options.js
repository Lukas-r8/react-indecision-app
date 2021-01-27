import Option from './Option'
import React from 'react'

const Options = (props) => {
    const optionsCount = props.options.length;
    return (
        <div>
            <button onClick={props.removeAll}>Remove all</button>
            <p>you have {optionsCount} options</p>
            {optionsCount == 0 && <p>Please add an option to get started!</p>}
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