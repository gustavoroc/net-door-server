import { CredentialsDTO } from 'src/dtos/credentials.dto';
import { UserDTO } from 'src/dtos/user.dto';

export interface IUserRepository {
  createUser(user: UserDTO): Promise<boolean>;
  findBy(query: string, data: string): Promise<UserDTO>;
  checkPassword(credentials: CredentialsDTO): Promise<UserDTO>;
}
