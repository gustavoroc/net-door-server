import { DataSource } from 'typeorm';
import { TORMEntityDoor } from '../entities/door.typeorm.entity';

export const doorProviders = [
  {
    provide: 'TORM_DOOR_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TORMEntityDoor),
    inject: ['DATA_SOURCE'],
  },
];
