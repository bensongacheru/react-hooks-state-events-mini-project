// src/components/Task.js
import React from 'react';

const Task = ({ text, category, onDelete }) => (
  <div className="task">
    <span>{text}</span>
    <span>{category}</span>
    <button onClick={onDelete}>Delete</button>
  </div>
);

export default Task;


