import React, { useState, useEffect } from 'react';
import axios from 'axios';
import routes from './routes.js';
import Tasks from './components/Tasks.jsx';
import NewTaskForm from './components/NewTaskForm.jsx';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {
      name: 'Task',   
      id: '1',
      description: 'Реализуйте и экспортируйте по умолчанию компонент, который реализует приложение "записная книжка".',
      date: Date(),
      completed: false,
    },
    {
      name: 'Task',   
      id: '2',
      completed: true,
    },
    {
      name: 'Task',   
      id: '3',
      completed: false,
    }
  ]);

  const [isShowTaskForm, setShowTaskForm] = useState(false);

  useEffect(() => {
    const requestData = async () => {
      const { data } = await axios.get(routes.getTasks());
      setTasks(data);
    };
    // requestData();
  }, []);


  const deleteTodo = (taskId) => async () => {
    try {
      // const res = await axios.delete(routes.deleteTask(taskId));
      const res = { status: 204 };
      if (res.status === 204) {
        const updateTaks = tasks.filter(({ id }) => id !== taskId);
        setTasks(updateTaks);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleToggle = (taskId) => async () => {
    try {
      const taskIndx = tasks.findIndex(({ id }) => taskId === id);
      const currentTask = { ...tasks[taskIndx], completed: !tasks[taskIndx].completed };
      const res = { status: 200 };
      // const res = await axios.patch(routes.editTask(taskId), { completed: !currentTask.completed });
      if (res.status === 200) setTasks(tasks.map((task) => task.id === taskId ? currentTask : task));
    } catch (e) {
      console.error(e);
    }
  };

  const showTaskForm = () => setShowTaskForm(!isShowTaskForm);

  return (
    <div className='app'>
      <div className='header'>
        <h1>Todo List</h1>
      </div>
      <div className='btn-conteiner'>
        <button type='button' className='btn' onClick={showTaskForm}>Добавить</button>
      </div>
      {isShowTaskForm ? <NewTaskForm /> : null}
      {tasks.length !== 0 ?
        <Tasks
          tasks={tasks}
          deleteTodo={deleteTodo}
          handleToggle={handleToggle}
        /> : null}
    </div>
  );
}

export default App;
