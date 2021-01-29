import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const initSwagger = (app, name) => {
  const options = new DocumentBuilder()
    .setTitle(name)
    .setDescription(`${name} API documents`)
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
};

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const appConfig = configService.get('app');

  await initSwagger(app, appConfig.name);

  await app.listen(appConfig.port);
};

bootstrap();
