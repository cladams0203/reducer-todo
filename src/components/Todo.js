import React from 'react'

export function Todo (props) {
    console.log(props)
    return(
        <h2 
           className={props.state.completed ? 'change' : ''}
            onClick={(e) => {
            e.preventDefault()
            props.handleComplete(props.state.id)
        }}>{props.state.item}</h2>
    )
}