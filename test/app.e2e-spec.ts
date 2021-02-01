import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect({ status: 'available' });
  });

  describe('CatController', () => {
    it('GET /cats', () => {
      return request(app.getHttpServer())
        .get('/cats')
        .expect(200)
        .expect('This action retrieves all cats.');
    });

    it('GET /cats/:id', () => {
      return request(app.getHttpServer())
        .get('/cats/1')
        .expect(200)
        .expect('This action retrieve cat by id 1');
    });

    it('DELETE /cats/:id', () => {
      return request(app.getHttpServer())
        .delete('/cats/1')
        .expect(501)
        .expect({ message: 'Not implement yet' });
    });

    it('POST /cats', () => {
      const validData = { name: 'Amy', age: 3, color: 'white' };
      return request(app.getHttpServer())
        .post('/cats')
        .send(validData)
        .expect(201)
        .expect(
          `This action adds cat with name: ${validData.name}, age: ${validData.age} and color: ${validData.color}`,
        );
    });
  });
});
