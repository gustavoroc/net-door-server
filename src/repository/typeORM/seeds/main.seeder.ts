import { DataSource } from 'typeorm';
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

    const user = new TORMEntityUser();
    user.name = 'John Doe';
    user.email = 'johndoe@example.com';
    user.createdAt = new Date();
    await userRepository.manager.save(user);

    const door = new TORMEntityDoor();
    door.name = 'Door 1';
    door.createdAt = new Date();
    door.users = [user];
    await doorRepository.manager.save(door);

    const chat = new TORMEntityChat();
    chat.data = 'Hello, world!';
    chat.createdAt = new Date();
    chat.user = user;
    chat.door = door;
    await chatRepository.manager.save(chat);

    console.log('Data seeded successfully!');
  }
}
