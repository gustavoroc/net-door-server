import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeORMModule } from './repository/typeORM/typeORM.module';

@Module({
  imports: [typeORMModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
