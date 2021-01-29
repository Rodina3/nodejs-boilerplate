import { Module } from '@nestjs/common';
import { DogController } from './constroller/dog.controller';
import { DogService } from './service/dog.service';

@Module({
  controllers: [DogController],
  providers: [DogService],
})
export class DogModule {}
