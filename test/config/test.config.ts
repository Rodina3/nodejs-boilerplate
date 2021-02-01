import { ConfigFactory } from '@nestjs/config/dist/interfaces';
import { defaultConfig } from '../../src/config/default.config';
import * as _ from 'lodash';

export const testConfig = {
  database: {
    url: 'postgresql://postgres:password@localhost:5432/postgres',
    schema: 'test',
    migrationsRun: true,
    migrations: [__dirname + '/migration/{*.js,*.ts}'],
  },
};

export const loadTestConfig: ConfigFactory = () =>
  _.merge(defaultConfig, testConfig);
