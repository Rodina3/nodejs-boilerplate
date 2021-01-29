import { CatService } from './cat.service';
import { AddCatDto } from '../controller/dto/add-cat.dto';

describe('CatService', () => {
  let service: CatService;

  beforeEach(async () => {
    service = new CatService();
  });

  it('should retrieve all cats when retrieveCats() called', () => {
    const result = service.retrieveCats();

    expect(result).toBe('This action retrieves all cats.');
  });

  it('should retrieve cat by id when retrieveCatById() called given id', () => {
    const id = 123;

    const result = service.retrieveCatById(id);

    expect(result).toBe(`This action retrieve cat by id ${id}`);
  });

  it('should add cat when addCat() called given AddCatDto', () => {
    const addCatDto = new AddCatDto('Amy', 5, 'White');

    const result = service.addCat(addCatDto);

    expect(result).toBe(
      `This action adds cat with name: ${addCatDto.name}, age: ${addCatDto.age} and color: ${addCatDto.color}`,
    );
  });
});
