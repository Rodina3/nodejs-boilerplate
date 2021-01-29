import { Injectable } from '@nestjs/common';
import { AddDogDto } from '../constroller/dto/add-cat.dto';

@Injectable()
export class DogService {
  retrieveDogs() {
    return 'This action retrieves all dogs.';
  }

  addDog(addDogDto: AddDogDto) {
    return `This action adds dog with name: ${addDogDto.name}`;
  }
}
