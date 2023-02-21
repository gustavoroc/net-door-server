import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserOrchestratorModule } from './orchestrator/user/user.orchestrator.module';

@Module({
  imports: [UserOrchestratorModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
