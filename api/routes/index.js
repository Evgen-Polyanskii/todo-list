import tasks from './tasks.js';

const controllers = [tasks];

export default (app) => controllers.forEach((f) => f(app));
