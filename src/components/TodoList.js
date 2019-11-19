import React from 'react'
import { Todo } from './Todo'

export function TodoList (props) {

    return(
        <div>
            {props.state.map((e, index) => {
                return(
                    <Todo state={e} key={index} handleComplete={props.handleComplete}/>
                )
            })}
        
        </div>
    )
}