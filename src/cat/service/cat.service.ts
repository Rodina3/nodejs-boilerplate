import { Injectable } from '@nestjs/common';
import { AddCatDto } from '../controller/dto/add-cat.dto';

@Injectable()
export class CatService {
  retrieveCats() {
    return 'This action retrieves all cats.';
  }

  retrieveCatById(id: number) {
    return `This action retrieve cat by id ${id}`;
  }

  addCat(addCatDto: AddCatDto) {
    return `This action adds cat with name: ${addCatDto.name}, age: ${addCatDto.age} and color: ${addCatDto.color}`;
  }
}
