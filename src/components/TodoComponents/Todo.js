import React from 'react';

const Todo = props => {
  return (
    <div
      className={props.todo.completed ? 'completed' : ''}
      onClick={() => props.toggleCompleted(props.todo.id)}>
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Todo;