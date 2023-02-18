import { Task } from '../models/index.js';

const resource = '/tasks';

export default (app) => {
  app
    .get(resource, async (req, res, next) => {
      try {
        const tasks = await Task.find({});
        return res.status(200).json(tasks);
      } catch (e) {
        return next({ status: 400, message: e.message || 'failed to get tasks' });
      }
    })
    .post(resource, async (req, res, next) => {
      try {
        const task = await Task.create(req.body);
        return res.status(201).json(task);
      } catch (e) {
        return next({ status: 400, message: e.message || 'failed to create task' });
      }
    })
    .patch(`${resource}/:id`, async (req, res, next) => {
      try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).json(task);
      } catch (e) {
        return next({ status: 400, message: e.message || 'failed to update task' });
      }
    })
    .delete(`${resource}/:id`, async (req, res, next) => {
      try {
        await Task.findByIdAndRemove(req.params.id);
        return res.sendStatus(204);
      } catch (e) {
        return next({ status: 400, message: e.message || 'failed to delete task' });
      }
    });
};
