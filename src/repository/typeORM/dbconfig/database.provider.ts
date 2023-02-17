import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { TORMEntityChat } from '../entities/chat.typeorm.entity';
import { TORMEntityDoor } from '../entities/door.typeorm.entity';
import { TORMEntityUser } from '../entities/user.typeorm.entity';
import { MainSeeder } from '../seeds/main.seeder';

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 32768,
  username: 'postgres',
  password: 'postgrespw',
  database: 'netdoor',
  entities: [TORMEntityChat, TORMEntityDoor, TORMEntityUser],
  synchronize: true,
  seeds: [MainSeeder],
};

export const dataSource = new DataSource(options);

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return dataSource.initialize();
    },
  },
];
