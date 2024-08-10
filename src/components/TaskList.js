// src/components/TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDeleteTask }) => (
  <div>
    {tasks.map(task => (
      <Task
        key={task.id}
        text={task.text}
        category={task.category}
        onDelete={() => onDeleteTask(task.id)}
      />
    ))}
  </div>
);

export default TaskList;


