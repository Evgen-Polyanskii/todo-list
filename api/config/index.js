import _ from 'lodash';
import development from './development.js';

const environemt = {
  development: 'development',
};

const createConfig = () => {
  switch (process.env.NODE_ENV) {
    case environemt.development:
      return development;
    default:
      throw new Error(`Unknown environment type: ${process.env.NODE_ENV}`);
  }
};

export const getConfig = (name) => _.get(createConfig(), name, null);
