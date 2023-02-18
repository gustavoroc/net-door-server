import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../../dbconfig/database.module';
import { chatProviders } from '../../providers/chat.typeorm.provider';
import { ChatTypeORMRepository } from './chat.typeorm.repository';

describe('ChatTypeORMRepository', () => {
  let chatRepository: ChatTypeORMRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [ChatTypeORMRepository, ...chatProviders],
    }).compile();

    chatRepository = module.get<ChatTypeORMRepository>(ChatTypeORMRepository);
  });

  it('Should bring all the chats with the relationship with users and doors', async () => {
    const chats = await chatRepository.findAll();

    expect(chats).toBeDefined();
    expect(Array.isArray(chats)).toBe(true);
  });
});
