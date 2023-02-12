import { DataSource } from 'typeorm';
import { TORMEntityChat } from '../entities/chat.typeorm.entity';
import { TORMEntityDoor } from '../entities/door.typeorm.entity';
import { TORMEntityUser } from '../entities/user.typeorm.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 32768,
        username: 'postgres',
        password: 'postgrespw',
        database: 'netdoor',
        entities: [TORMEntityChat, TORMEntityDoor, TORMEntityUser],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
