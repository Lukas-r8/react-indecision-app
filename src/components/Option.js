import React from 'react'

const Option = (props) => {
    const handleRemove = () => {
        props.deleteOption(props.item)
    }

    return (
        <div className="option">
            <p className="option__text">{props.count}. {props.item}</p>
            <button
                className="button button--link"
                onClick={handleRemove}
            >
                remove option
             </button>
        </div>
    );
}

export default Option;