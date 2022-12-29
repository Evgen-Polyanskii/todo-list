#! /usr/bin/env node
/* eslint-disable no-console */
import mongoose from 'mongoose';
import app from '../index.js';
import { getConfig } from '../config/index.js';

const { port, host } = getConfig('server');
const db = getConfig('db');

mongoose.connect(`mongodb://${db.host}:${db.port}/${db.dbName}`, db.options)
  .then(() => {
    console.log('The connection to the database is established.');
    app().listen(port, host, (err) => {
      if (err) {
        console.log(`App crashed ${err}`);
        process.exit(1);
      }
      console.log(`Server was started on http://${host}:${port}`);
    });
  })
  .catch(() => {
    console.log('Connection to the database is not established.');
    process.exit(1);
  });
