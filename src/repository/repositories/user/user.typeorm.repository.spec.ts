import { UserTypeORMRepository } from './user.typeorm.repository';
import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../../../repository/typeORM/dbconfig/database.module';
import { TORMEntityUser } from '../../../repository/typeORM/entities/user.typeorm.entity';
import { userProviders } from '../../../repository/typeORM/providers/user.typeorm.provider';
import { Repository } from 'typeorm';
import { credentials, user } from '../../../dtos/test/mocked-dtos.mock';
import { CredentialsDTO } from 'src/dtos/credentials.dto';

describe('UserTypeORMRepository', () => {
  let userRepository: UserTypeORMRepository;
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [...userProviders, UserTypeORMRepository],
    }).compile();

    userRepository = module.get<UserTypeORMRepository>(UserTypeORMRepository);
  });

  afterAll(async () => {
    await module.close();
  });

  afterEach(async () => {
    await module
      .get<Repository<TORMEntityUser>>('TORM_USER_REPOSITORY')
      .query('TRUNCATE TABLE torm_entity_user CASCADE');
  });

  it('Should create a user', async () => {
    const queryState = await userRepository.createUser(user);
    expect(queryState).toBeTruthy();
  });

  it('Should get a user', async () => {
    const _user = user;
    await userRepository.createUser(_user);
    const queriedUser = await userRepository.findBy('name', _user.name);
    expect(queriedUser.name).toBe(user.name);
  });

  it('Should return the user if the given password is correct', async () => {
    const _user = user;
    const _credentials = new CredentialsDTO(_user.email, _user.password);

    await userRepository.createUser(_user);
    const queryState = await userRepository.checkPassword(_credentials);

    expect(queryState).toBe(_user);
  });
});
