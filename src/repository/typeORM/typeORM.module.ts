import { Module } from '@nestjs/common';

import { TORMRepoModule } from './repositories/repositories.module';

@Module({
  imports: [TORMRepoModule],
  exports: [TORMRepoModule],
})
export class TORMModule {}
