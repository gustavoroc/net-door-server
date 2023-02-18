import { faker } from '@faker-js/faker';
import { DataSource, Repository } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { TORMEntityChat } from '../entities/chat.typeorm.entity';
import { TORMEntityDoor } from '../entities/door.typeorm.entity';
import { TORMEntityUser } from '../entities/user.typeorm.entity';

export class MainSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const userRepository = dataSource.getRepository(TORMEntityUser);
    const doorRepository = dataSource.getRepository(TORMEntityDoor);
    const chatRepository = dataSource.getRepository(TORMEntityChat);

    for (let x = 0; x < 10; x++) {
      await this.commandToBeSeeded(
        userRepository,
        doorRepository,
        chatRepository,
      );
    }

    console.log('Data seeded successfully!');
  }

  async commandToBeSeeded(
    userRepository: Repository<TORMEntityUser>,
    doorRepository: Repository<TORMEntityDoor>,
    chatRepository: Repository<TORMEntityChat>,
  ) {
    const user = new TORMEntityUser();
    user.name = faker.name.firstName();
    user.email = faker.internet.email();
    user.createdAt = new Date();
    await userRepository.manager.save(user);

    const door = new TORMEntityDoor();
    door.name = faker.name.firstName() + ' ' + 'Door';
    door.createdAt = new Date();
    door.users = [user];
    await doorRepository.manager.save(door);

    const chat = new TORMEntityChat();
    chat.data = faker.lorem.paragraph();
    chat.createdAt = new Date();
    chat.user = user;
    chat.door = door;
    await chatRepository.manager.save(chat);
  }
}
