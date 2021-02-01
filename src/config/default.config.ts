import { CatEntity } from '../cat/service/entity/cat.entity';

export const ENTITIES = [CatEntity];

export const defaultConfig = {
  app: {
    name: 'nodejs-boilerplate',
    host: 'localhost',
    port: 3000,
  },
  database: {
    type: 'postgres',
    entities: [...ENTITIES],
    migrations: [__dirname + '/migration/{*.js,*.ts}'],
    migrationsRun: true,
    logging: false,
  },
};
