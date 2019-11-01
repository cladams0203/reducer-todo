import React from 'react'

export function Todo (props) {

    return(
        <h2 onClick={(e) => {
            e.preventDefault()
            props.handleComplete(props.state.id)
            e.target.classList.toggle('change')
        }}>{props.state.item}</h2>
    )
}