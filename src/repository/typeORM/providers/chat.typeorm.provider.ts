import { DataSource } from 'typeorm';
import { TORMEntityChat } from '../entities/chat.typeorm.entity';

export const chatProviders = [
  {
    provide: 'TORM_CHAT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TORMEntityChat),
    inject: ['DATA_SOURCE'],
  },
];
