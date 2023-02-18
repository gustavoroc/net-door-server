import { Inject, Injectable } from '@nestjs/common';
import { IDoorRepository } from 'src/interfaces/door-repository.interface';
import { Repository } from 'typeorm';
import { TORMEntityDoor } from '../entities/door.typeorm.entity';

@Injectable()
export class DoorTypeORMRepository implements IDoorRepository {
  constructor(
    @Inject('TORM_DOOR_REPOSITORY')
    private doorRepository: Repository<TORMEntityDoor>,
  ) {}

  async findAll(): Promise<TORMEntityDoor[]> {
    return this.doorRepository.find();
  }
}
