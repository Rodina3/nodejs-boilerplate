import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DogService } from '../service/dog.service';
import { AddDogDto } from './dto/add-cat.dto';

@ApiTags('Dogs API')
@Controller('dogs')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get()
  retrieveAllDogs() {
    return this.dogService.retrieveDogs();
  }

  @Post()
  addDog(@Body() addDogDto: AddDogDto) {
    return this.dogService.addDog(addDogDto);
  }
}
