import express from 'express';
import bodyParser from 'body-parser';
import addRoutes from './routes/index.js';

export default () => {
  const app = express();
  app.use(bodyParser.json());
  addRoutes(app);
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => res.status(err.status).json({
    message: err.message,
  }));

  return app;
};
