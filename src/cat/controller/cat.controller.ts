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
    return this.catService.addCat(addCatDto);
  }

  @Delete(':id')
  deleteCatById() {
    throw new NotImplementedException('Not implement yet');
  }
}
