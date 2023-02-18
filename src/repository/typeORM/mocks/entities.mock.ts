import { faker } from '@faker-js/faker';
import { TORMEntityUser } from '../entities/user.typeorm.entity';
import { TORMEntityDoor } from '../entities/door.typeorm.entity';
import { TORMEntityChat } from '../entities/chat.typeorm.entity';

const user_mock = new TORMEntityUser();
const door_mock = new TORMEntityDoor();
const chat_mock = new TORMEntityChat();

// -=-=-=-=-=-= USER SETUP -=-=-=-=-=-=-=--

user_mock.name = faker.name.firstName();
user_mock.email = faker.internet.email();
user_mock.createdAt = faker.date.recent();

// -=-=-=-=-=-= DOOR SETUP -=-=-=-=-=-=-=--

door_mock.name = faker.name.firstName() + 'Door';
door_mock.createdAt = faker.date.recent();
door_mock.users = [user_mock];

// -=-=-=-=-=-= CHAT SETUP -=-=-=-=-=-=-=--

chat_mock.data = faker.lorem.paragraph();
chat_mock.createdAt = faker.date.recent();
chat_mock.user = user_mock;
chat_mock.door = door_mock;

export { user_mock, door_mock, chat_mock };
