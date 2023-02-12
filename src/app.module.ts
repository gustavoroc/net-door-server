import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TORMModule } from './repository/typeORM/typeorm.module';

@Module({
  imports: [TORMModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
