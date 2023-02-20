import { Inject } from '@nestjs/common';
import { UserDTO } from '../../dtos/user.dto';
import { User } from '../../entities/user/user.entity';
import { IUserRepository } from '../../interfaces/user-repository.interface';

export class UserOrchestrator {
  constructor(
    @Inject('IUserRepositoryToken') private userRepository: IUserRepository,
  ) {}

  async Credentiate(user: UserDTO) {
    const _user = await this.userRepository.checkPassword({
      email: user.email,
      password: user.password,
    });

    const domainUser = new User(
      _user.name,
      _user.email,
      _user.createdAt,
      _user.id,
    );

    const { name, email, createdAt, id } = domainUser.getUserInformation();

    return new UserDTO(name, email, id, '00000', createdAt);
  }
}
