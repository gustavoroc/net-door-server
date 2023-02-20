import { Inject, Injectable } from '@nestjs/common';
import { IDoorRepository } from 'src/interfaces/door-repository.interface';
import { Repository } from 'typeorm';
import { TORMEntityDoor } from '../typeORM/entities/door.typeorm.entity';
import { DoorDTO } from 'src/dtos/door.dto';

@Injectable()
export class DoorTypeORMRepository implements IDoorRepository {
  constructor(
    @Inject('TORM_DOOR_REPOSITORY')
    private doorRepository: Repository<TORMEntityDoor>,
  ) {}
}
