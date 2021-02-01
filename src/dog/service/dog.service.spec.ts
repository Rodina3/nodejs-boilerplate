import { DogService } from './dog.service';
import { AddDogDto } from '../controller/dto/add-cat.dto';

describe('DogService', () => {
  let service: DogService;

  beforeEach(async () => {
    service = new DogService();
  });

  it('should retrieve all dogs when retrieveDogs() called', () => {
    const result = service.retrieveDogs();

    expect(result).toBe('This action retrieves all dogs.');
  });

  it('should add dog when addDog() called given AddDogDto', () => {
    const addDogDto = new AddDogDto('Amy');

    const result = service.addDog(addDogDto);

    expect(result).toBe(`This action adds dog with name: ${addDogDto.name}`);
  });
});
