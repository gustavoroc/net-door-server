import { Module } from '@nestjs/common';
import { TORMRepoModule } from './repositories/door/door.typeorm.module';

@Module({
  imports: [TORMRepoModule],
})
export class typeORMModule {}
