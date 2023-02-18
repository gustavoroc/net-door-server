import { DataSource, Repository } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { TORMEntityChat } from '../entities/chat.typeorm.entity';
import { TORMEntityDoor } from '../entities/door.typeorm.entity';
import { TORMEntityUser } from '../entities/user.typeorm.entity';
import { chat_mock, door_mock, user_mock } from '../mocks/entities.mock';

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
    await userRepository.manager.save(user_mock);
    await doorRepository.manager.save(door_mock);
    await chatRepository.manager.save(chat_mock);
  }
}
