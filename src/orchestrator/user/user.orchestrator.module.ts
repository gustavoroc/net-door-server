import { Module } from '@nestjs/common';
import { UserOrchestrator } from './user.orchestrator';
import { TORMRepoModule } from 'src/repository/repositories/repositories.module';
import { UserTypeORMRepository } from 'src/repository/repositories/user/user.typeorm.repository';

@Module({
  imports: [TORMRepoModule],
  providers: [
    UserOrchestrator,
    {
      provide: 'IUserRepositoryToken',
      useClass: UserTypeORMRepository,
    },
  ],
  exports: [UserOrchestrator],
})
export class UserOrchestratorModule {}
