import { Module } from '@nestjs/common';

import { ChatTypeORMRepository } from './chat/chat.typeorm.repository';
import { DoorTypeORMRepository } from './door.typeorm.repository';
import { UserTypeORMRepository } from './user.typeorm.repository';
import { TORMProvidersModule } from '../typeORM/providers/providers.module';

@Module({
  imports: [TORMProvidersModule],
  providers: [
    DoorTypeORMRepository,
    ChatTypeORMRepository,
    UserTypeORMRepository,
  ],
  exports: [
    DoorTypeORMRepository,
    ChatTypeORMRepository,
    UserTypeORMRepository,
  ],
})
export class TORMRepoModule {}
