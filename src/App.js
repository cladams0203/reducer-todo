import React, {useReducer} from 'react';
import { TodoList } from './components/TodoList'
import { TodoForm } from './components/TodoForm';
import './App.css';
import { todoReducer, initialState } from './reducers/todoReducer';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleAdd = (item) => {
    const newItem = {
      item: item,
      completed: false,
      id: Math.random()
    }
    dispatch({type: "ADD_TODO", payload: newItem})
  }

  const handleComplete = (id) => {
    dispatch({type: "TOGGLE_COMPLETE", payload: id})
  }

  const handleRemove = () => {
    dispatch({type: "REMOVE_TODO"})
  }

  console.log(state)
  return (
    <div className="App">
      <TodoList state={state.list} handleComplete={handleComplete}/>
      <TodoForm handleAdd={handleAdd} />
      <button onClick={handleRemove}>Remove Completed</button>
    </div>
  );
}

export default App;
