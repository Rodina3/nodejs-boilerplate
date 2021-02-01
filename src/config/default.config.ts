export const ENTITIES = [];

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
