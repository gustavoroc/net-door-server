import { faker } from '@faker-js/faker';
import { CredentialsDTO } from '../../../dtos/credentials.dto';
import { UserDTO } from '../../../dtos/user.dto';
import { IUserRepository } from '../../../interfaces/user-repository.interface';

export class UserRepositoryStub implements IUserRepository {
  createUser(user: UserDTO): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  findBy(query: string, data: string): Promise<UserDTO> {
    throw new Error('Method not implemented.');
  }
  async checkPassword(credentials: CredentialsDTO): Promise<UserDTO> {
    return new UserDTO(
      faker.name.firstName(),
      credentials.email,
      faker.random.numeric(2),
      credentials.password,
      faker.date.past(),
    );
  }
}
