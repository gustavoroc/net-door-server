import { Module } from '@nestjs/common';
import { DatabaseModule } from '../dbconfig/database.module';

import { chatProviders } from './chat.typeorm.provider';
import { doorProviders } from './door.typeorm.provider';
import { userProviders } from './user.typeorm.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...doorProviders, ...chatProviders, ...userProviders],
  exports: [...doorProviders, ...chatProviders, ...userProviders],
})
export class TORMProvidersModule {}
