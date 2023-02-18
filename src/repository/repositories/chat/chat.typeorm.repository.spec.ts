import { DatabaseModule } from 'src/repository/typeORM/dbconfig/database.module';
import { chatProviders } from 'src/repository/typeORM/providers/chat.typeorm.provider';
import { TORMEntityChat } from 'src/repository/typeORM/entities/chat.typeorm.entity';

import { ChatTypeORMRepository } from './chat.typeorm.repository';

import { Test, TestingModule } from '@nestjs/testing';

import { faker } from '@faker-js/faker';

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

  it('Should create a chat into the database', () => {});

  it('Should bring all the chats with the relationship with users and doors', async () => {
    const chats = await chatRepository.findAll();

    expect(chats).toBeDefined();
    expect(Array.isArray(chats)).toBe(true);
  });
});
