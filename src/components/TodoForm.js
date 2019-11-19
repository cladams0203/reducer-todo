import React, { useState } from 'react'

export function TodoForm (props) {
    const [formInput, setFormInput] = useState('');
    
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            props.handleAdd(formInput)
            setFormInput('')
        }} >
            <input 
            type='text'
            name='listitem'
            value={formInput}
            onChange={(e) => {
                setFormInput(e.target.value)
            }}
            >
            </input>
            <button type='submit'>Add Todo</button>
        </form>
    )
}