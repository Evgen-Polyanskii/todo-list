const URL = `http://127.0.0.1:3000`;

const routes = {
  getTasks: () => `${URL}/tasks`,
  postTask: () => `${URL}/tasks`,
  editTask: (id) => `${URL}/tasks/${id}`,
  deleteTask: (id) => `${URL}/tasks/${id}`,
}

export default routes;
