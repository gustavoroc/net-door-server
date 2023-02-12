import { DataSource } from 'typeorm';
import { TORMEntityUser } from '../entities/user.typeorm.entity';

export const userProviders = [
  {
    provide: 'TORM_USER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TORMEntityUser),
    inject: ['DATA_SOURCE'],
  },
];
