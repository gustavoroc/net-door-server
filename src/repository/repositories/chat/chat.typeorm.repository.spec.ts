import { ChatTypeORMRepository } from './chat.typeorm.repository';

import { Test, TestingModule } from '@nestjs/testing';
import { mocked_dtos } from 'src/dtos/test/mocked-dtos.mock';
import { DatabaseModule } from 'src/repository/typeORM/dbconfig/database.module';
import { chatProviders } from 'src/repository/typeORM/providers/chat.typeorm.provider';

describe('ChatTypeORMRepository', () => {
  let chatRepository: ChatTypeORMRepository;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [ChatTypeORMRepository, ...chatProviders],
    }).compile();

    chatRepository = module.get<ChatTypeORMRepository>(ChatTypeORMRepository);
  });

  afterAll(() => {
    module.close();
  });

  afterEach(async () => {
    await module.get('TORM_CHAT_REPOSITORY').clear();
  });

  it('Should create a chat into the database', async () => {
    const chat = mocked_dtos['chat'];
    const user = mocked_dtos['user'];
    const door = mocked_dtos['door'];

    const createdChat = await chatRepository.addChat(chat, user.id, door.id);

    expect(createdChat.id).toBe(chat.id);
  });

  it('Should bring all the chats with the relationship with users and doors', async () => {
    const chats = await chatRepository.findAll();

    expect(chats).toBeDefined();
    expect(Array.isArray(chats)).toBe(true);
  });
});
