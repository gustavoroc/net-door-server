import { User } from './user.entity';
import { faker } from '@faker-js/faker';
import { Door } from '../door/door.entity';

describe('User entity', () => {
  let user: User;
  let users: User[] = [];

  let door: Door;

  beforeEach(() => {
    user = new User(
      'fake',
      'fake@gmail.com',
      new Date(),
      '4aada60e-aa28-11ed-afa1-0242ac120002',
    );

    door = new Door();

    for (var i = 0; i < 5; i++) {
      const name = faker.name.firstName();
      const email = faker.internet.email();
      const createdAt = faker.date.past();
      const id = faker.datatype.uuid();

      const user = new User(name, email, createdAt, id);

      users.push(user);
    }
  });

  it('Should add friends to his friendlist', () => {
    user.addFriend(users[0]);
    expect(user.getFriends().length).toBe(1);
  });

  it('Should add a door to its own doors', () => {
    user.addDoor(door);
    expect(user.getDoors().length).toBe(1);
  });
});
