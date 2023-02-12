import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/repository/typeORM/config/database.module';
import { doorProviders } from '../../config/door.typeorm.provider';
import { DoorTypeORMRepository } from './door.typeorm.repository';

@Module({
  imports: [DatabaseModule],
  providers: [...doorProviders, DoorTypeORMRepository],
})
export class PhotoModule {}
