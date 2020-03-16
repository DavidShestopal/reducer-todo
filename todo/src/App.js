import React, { useReducer } from 'react';
import { TodoForm } from './Components/todoForm';
import { TodoList } from './Components/todoList';
import { initialState, reducer } from './Reducers /Reducer';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const addTodo = input => {
    const newTodo = {
      todo: input,
      completed: false,
      id: Math.random(),
    };
    dispatch({ type: 'ADD_TODO', payload: newTodo });
  };

  const handleComplete = id => {
    dispatch({ type: 'COMPLETED_TODO', payload: id });
  };

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED_TODO' });
  };

  return (
    <div className="App">
      <TodoList state={state} handleComplete={handleComplete} />
      <TodoForm addTodo={addTodo} />
      <button
        className="clear"
        onClick={e => {
          e.preventDefault();
          clearCompleted();
        }}
      >
        Clear Task
      </button>
    </div>
  );
}

export default App;
