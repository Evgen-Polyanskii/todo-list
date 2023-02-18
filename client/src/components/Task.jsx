import React from 'react';

const Task = ({ task, isShown, handleToggle, deleteTodo, showTodo }) => {
  return (
    <div className='task-conteiner'>
      <div
        className='task-header'
        style={{textDecoration: task.completed ? 'line-through' : ''}}
        onClick={showTodo(task.id)}
      >
        <div><span>{task.name}</span></div>
      </div>
      {isShown ?
        <div className='task-body'>
          <div>
            <span>Описание:</span>
            <p>{task.description}</p>
          </div>
          <div>
            <span>Файлы:</span>
            <p>{task.filePath}</p>
          </div>
          <div>
            <span>Дата:</span>
            <p>{task.date}</p>
          </div>
        </div> : null
      }
      <div className='btn-conteiner'>
        <button className='btn' type='button' onClick={handleToggle}>{task.completed ? 'Начать' : 'Завершить'}</button>
        <button className='btn' type='button'>Изменить</button>
        <button className='btn' type='button' onClick={deleteTodo}>Удалить</button>
      </div>
    </div>
  )
};

export default Task;
