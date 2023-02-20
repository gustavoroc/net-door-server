import { faker } from '@faker-js/faker';
import { UserDTO } from '../user.dto';
import { DoorDTO } from '../door.dto';
import { ChatDTO } from '../chat.dto';
import { CredentialsDTO } from '../credentials.dto';

export const user = new UserDTO(
  faker.name.firstName(),
  faker.internet.email(),
  faker.datatype.number(3).toString(),
  faker.lorem.words(5),
  faker.date.past(),
);

export const door = new DoorDTO(
  faker.random.numeric(5),
  faker.name.firstName(),
  faker.date.past(),
);

export const chat = new ChatDTO(
  faker.lorem.word(),
  faker.random.numeric(5),
  faker.date.past(),
  user,
  door,
);

export const credentials = new CredentialsDTO(
  faker.internet.email(),
  faker.datatype.number(5).toString(),
);
