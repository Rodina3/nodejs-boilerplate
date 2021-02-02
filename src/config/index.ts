import { ConfigFactory } from '@nestjs/config/dist/interfaces';
import { defaultConfig } from './default.config';
import { localConfig } from './local.config';
import { devConfig } from './dev.config';
import { prodConfig } from './prod.config';
import * as _ from 'lodash';

const loadConfig: ConfigFactory = () => {
  const env = process.env.NODE_ENV;

  let envConfig;
  switch (env) {
    case 'dev':
      envConfig = devConfig;
      break;
    case 'prod':
      envConfig = prodConfig;
      break;
    default:
      envConfig = localConfig;
      break;
  }
  return _.merge(defaultConfig, envConfig);
};

export default loadConfig;
