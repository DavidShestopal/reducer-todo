import React from 'react';

export function Todo(props) {
  return (
    <div>
      <h2
        className={props.item.completed ? 'complete' : ''}
        style={props.item.completed ? { textDecoration: 'line-through' } : null}
        onClick={e => {
          e.preventDefault();
          props.handleComplete(props.item.id);
        }}
      >
        {' '}
        {props.item.todo}{' '}
      </h2>
    </div>
  );
}
