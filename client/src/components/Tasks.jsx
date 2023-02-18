import React, { useState } from 'react';
import Task from './Task.jsx';

const Tasks = ({ tasks, deleteTodo, handleToggle }) => {

  const [shownTask, setShownTask] = useState(null);

  const showTodo = (taskId) => () => {
    if (shownTask !== taskId) setShownTask(taskId)
    else setShownTask(null);
  };

  return (
    <div className='tasks-conteiner'>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}><Task
            task={task}
            showTodo={showTodo}
            isShown={shownTask === task.id}
            deleteTodo={deleteTodo(task.id)}
            handleToggle={handleToggle(task.id)}
          /></li>
        ))}
      </ul>
    </div> 
  );
};

export default Tasks;
