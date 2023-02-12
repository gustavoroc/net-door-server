import { faker } from '@faker-js/faker';
import { Chat } from '../chat/chat.entity';
import { User } from '../user/user.entity';
import { Door } from './door.entity';

describe('Door entity', () => {
  let door: Door;
  let user: User;
  let chat: Chat;

  beforeEach(() => {
    const { name, email, createdAt, id } = {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      createdAt: faker.date.past(),
      id: faker.datatype.uuid(),
    };

    const { date, data, userId } = {
      date: faker.date.recent(),
      data: 'Ola!!',
      userId: faker.datatype.uuid(),
    };

    chat = new Chat(date, data, userId);
    user = new User(name, email, createdAt, id);
    door = new Door('teste');
  });

  it('Should accept and save users into the door', () => {
    door.connectUser(user);
    expect(door.connectedUsers().length).toBe(1);
  });

  it('Should save a chat from a user into the conversation', () => {
    door.addChat(chat);
    expect(door.conversationLog()[0]).toBe(chat);
  });

  it('Should have an observer to comunicate that someone entered into the door', () => {
    let subscriptionData: any;
    door.subscribeToUsers((data: User[]) => {
      subscriptionData = data;
    });
    door.connectUser(user);
    expect(subscriptionData).toEqual([user]);
  });

  it('Should have an observer to comunicate that someone chatted into the conversation', () => {
    let subscriptionData: any;
    door.subscribeToConversation((data: Chat[]) => {
      subscriptionData = data;
    });
    door.addChat(chat);
    expect(subscriptionData).toEqual([chat]);
  });
});
