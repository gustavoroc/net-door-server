import { Module } from '@nestjs/common';
import { PhotoModule } from './repositories/door/door.typeorm.module';

@Module({
  imports: [PhotoModule],
})
export class typeORMModule {}
