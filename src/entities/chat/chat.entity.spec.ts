import { faker } from '@faker-js/faker';
import { Chat } from './chat.entity';

describe('Chat', () => {
  let chat: Chat;

  beforeEach(() => {
    const { date, data, userId } = {
      date: faker.date.past(),
      data: 'Ola!',
      userId: faker.datatype.uuid(),
    };

    chat = new Chat(date, data, userId);
  });

  it('Should generate a UUID when created', () => {
    const { chatId } = chat.getChatInformation();
    expect(chatId).toBeTruthy();
  });
});
