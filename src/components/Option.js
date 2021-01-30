import React from 'react'

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

export default Option;