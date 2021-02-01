import {
  Body,
  Controller,
  Delete,
  Get,
  NotImplementedException,
  Param,
  Post,
} from '@nestjs/common';
import { CatService } from '../service/cat.service';
import { AddCatDto } from './dto/add-cat.dto';
import { ApiTags } from '@nestjs/swagger';
import { CatEntity } from '../service/entity/cat.entity';

@ApiTags('Cats API')
@Controller('cats')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  retrieveAllCats() {
    return this.catService.retrieveCats();
  }

  @Get(':id')
  retrieveCatById(@Param('id') id: number) {
    return this.catService.retrieveCatById(id);
  }

  @Post()
  addCat(@Body() addCatDto: AddCatDto) {
    const { name, age, color } = addCatDto;
    const newCatEntity = new CatEntity(name, color, age);
    return this.catService.addCat(newCatEntity);
  }

  @Delete(':id')
  removeCatById() {
    throw new NotImplementedException('Not implement yet');
  }
}
