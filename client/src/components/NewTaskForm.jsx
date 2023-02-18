import React, { useState } from 'react';

const NewTaskForm = () => {
  const  [task, setTask] = useState({
    name: '',
    description: '',
    filePath: '',
    date: Date(),
    completed: false,
  });

  const onChange = (fieldName) => (e) => setTask({ ...task, [fieldName]: e.target.value });

  return (
    <form>
      <div>
        <label>
            Имя:
            <input
              type='text'
              name='name'
              required
              value={task.name}
              onChange={onChange('name')} 
            />
        </label>
      </div>
      <div>
        <label>
            Описание:
            <textarea
              name='description'
              value={task.description}
              onChange={onChange('description')}
            />
        </label>
      </div>
      <div>
        <label>
            Добавить файл:
            <input
              type='file'
              name='filePath'
              value={task.filePath}
              onChange={onChange('filePath')}
            />
        </label>
      </div>
      <div>
        <label>
            Дата:
            <input
              type='date'
              name='date'
              value={task.date}
              onChange={onChange('date')}
            />
        </label>
      </div>
      <input type="submit" value="Создать" />
    </form>
  )
};

export default NewTaskForm;