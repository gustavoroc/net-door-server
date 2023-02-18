import { Module } from '@nestjs/common';

import { TORMProvidersModule } from '../providers/providers.module';
import { ChatTypeORMRepository } from './chat/chat.typeorm.repository';
import { DoorTypeORMRepository } from './door.typeorm.repository';
import { UserTypeORMRepository } from './user.typeorm.repository';

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
