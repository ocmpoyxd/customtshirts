import React from 'react'
import './Inputbox.css'

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Inputbox = props => {
    const inputType = props.type || 'text'
    const htmlFor = `${inputType}-${Math.random()}`
    return (
        <div className="Input">
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                name={props.name}
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />
            {
                isInvalid(props)
                    ? <span>{props.errorMessage || 'Input valid value'}</span>
                    : null
            }
            
        </div>
    )
}

export default Inputbox