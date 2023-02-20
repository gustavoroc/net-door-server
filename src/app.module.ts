import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TORMRepoModule } from './repository/repositories/repositories.module';

@Module({
  imports: [TORMRepoModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
