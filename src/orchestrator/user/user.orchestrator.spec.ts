import { Test, TestingModule } from '@nestjs/testing';
import { UserOrchestrator } from './user.orchestrator';
import { UserRepositoryStub } from './test/user.repository.stub';
import { user } from '../../dtos/test/mocked-dtos.mock';

describe('UserOrchestrator', () => {
  let module: TestingModule;
  let orchestrator: UserOrchestrator;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [
        UserOrchestrator,
        {
          provide: 'IUserRepositoryToken',
          useClass: UserRepositoryStub,
        },
      ],
    }).compile();

    orchestrator = module.get<UserOrchestrator>(UserOrchestrator);
  });

  it('Should process a user with the domain entities', async () => {
    const _user = user;
    const processedUser = await orchestrator.Credentiate(_user);
    expect(processedUser.email).toBe(_user.email);
  });
});
