import { Task } from '../models/index.js';

const resource = '/tasks';

const success = (res, payload) => res.status(200).json(payload);

export default (app) => {
  app
    .get(resource, async (req, res, next) => {
      try {
        const tasks = await Task.find({});
        return success(res, tasks);
      } catch (e) {
        return next({ status: 400, message: e.message || 'failed to get tasks' });
      }
    })
    .post(resource, async (req, res, next) => {
      try {
        const task = await Task.create(req.body);
        return success(res, task);
      } catch (e) {
        return next({ status: 400, message: e.message || 'failed to create task' });
      }
    })
    .patch(`${resource}/:id`, async (req, res, next) => {
      try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
        return success(res, task);
      } catch (e) {
        return next({ status: 400, message: e.message || 'failed to update task' });
      }
    })
    .delete(`${resource}/:id`, async (req, res, next) => {
      try {
        await Task.findByIdAndRemove(req.params.id);
        return success(res, {});
      } catch (e) {
        return next({ status: 400, message: e.message || 'failed to delete task' });
      }
    });
};
