import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../../../interfaces/user-repository.interface';
import { Repository } from 'typeorm';
import { TORMEntityUser } from '../../typeORM/entities/user.typeorm.entity';
import { UserDTO } from '../../../dtos/user.dto';
import { CredentialsDTO } from '../../../dtos/credentials.dto';

@Injectable()
export class UserTypeORMRepository implements IUserRepository {
  constructor(
    @Inject('TORM_USER_REPOSITORY')
    private userRepository: Repository<TORMEntityUser>,
  ) {}

  async createUser(user: UserDTO) {
    const db_user = new TORMEntityUser(
      user.name,
      user.email,
      user.createdAt,
      user.password,
    );

    await this.userRepository.save(db_user);

    return true;
  }

  async findBy(query: string, data: string) {
    const [user] = await this.userRepository.findBy({
      [query]: data,
    });

    return new UserDTO(
      user.name,
      user.email,
      user.id,
      user.password,
      user.createdAt,
    );
  }

  async checkPassword(credentials: CredentialsDTO) {
    const user = await this.userRepository.findOneBy({
      ...credentials,
    });

    return new UserDTO(
      user.name,
      user.email,
      user.id,
      user.password,
      user.createdAt,
    );
  }
}
