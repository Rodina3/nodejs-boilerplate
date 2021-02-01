import { ConfigFactory } from '@nestjs/config/dist/interfaces';
import { defaultConfig } from '../../src/config/default.config';
import * as _ from 'lodash';

const testConfig = {
  database: {
    url: 'postgresql://postgres:password@localhost:5432/postgres',
    migrationsRun: false,
  },
};

export const loadTestConfig: ConfigFactory = () =>
  _.merge(defaultConfig, testConfig);
