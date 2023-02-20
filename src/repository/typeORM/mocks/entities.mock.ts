import { faker } from '@faker-js/faker';
import { TORMEntityUser } from '../entities/user.typeorm.entity';
import { TORMEntityDoor } from '../entities/door.typeorm.entity';
import { TORMEntityChat } from '../entities/chat.typeorm.entity';

const user_mock = new TORMEntityUser(
  faker.name.firstName(),
  faker.internet.email(),
  faker.date.recent(),
);

const door_mock = new TORMEntityDoor();
door_mock.name = faker.name.firstName() + 'Door';
door_mock.createdAt = faker.date.recent();
door_mock.users = [user_mock];
door_mock.id = faker.random.numeric(5);

const chat_mock = new TORMEntityChat(
  faker.lorem.paragraph(),
  faker.date.recent(),
  user_mock.id,
  door_mock.id.toString(),
);

export { user_mock, door_mock, chat_mock };
