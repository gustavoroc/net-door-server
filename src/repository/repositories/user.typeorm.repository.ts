import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/interfaces/user-repository.interface';
import { Repository } from 'typeorm';
import { TORMEntityUser } from '../typeORM/entities/user.typeorm.entity';

@Injectable()
export class UserTypeORMRepository implements IUserRepository {
  constructor(
    @Inject('TORM_USER_REPOSITORY')
    private userRepository: Repository<TORMEntityUser>,
  ) {}

  async findAll(): Promise<TORMEntityUser[]> {
    return this.userRepository.find();
  }
}
