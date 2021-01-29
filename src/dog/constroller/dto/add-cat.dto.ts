import { IsString, MaxLength, MinLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class AddDogDto {
  constructor(name: string) {
    this.name = name;
  }

  @ApiModelProperty({ description: 'The name of the dog' })
  @IsString()
  @MinLength(3, {
    message: 'name is too short',
  })
  @MaxLength(10, {
    message: 'name is too long',
  })
  name: string;
}
