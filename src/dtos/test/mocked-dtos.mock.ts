import { faker } from '@faker-js/faker';
import { UserDTO } from '../user.dto';
import { DoorDTO } from '../door.dto';
import { ChatDTO } from '../chat.dto';

export const mocked_dtos = {
  user: new UserDTO(
    faker.name.firstName(),
    faker.internet.email(),
    faker.random.numeric(5),
    faker.date.past(),
  ),
  door: new DoorDTO(
    faker.random.numeric(5),
    faker.name.firstName(),
    faker.date.past(),
  ),
  chat: new ChatDTO(
    faker.lorem.word(),
    faker.random.numeric(5),
    faker.date.past(),
  ),
};
