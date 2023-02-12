import { Controller, Get } from '@nestjs/common';
import { UserTypeORMRepository } from './repository/typeORM/repositories/user.typeorm.repository';

@Controller()
export class AppController {
  constructor(private userRepository: UserTypeORMRepository) {}

  @Get()
  async getHello() {
    const allRegisters = await this.userRepository.findAll();
    return allRegisters;
  }
}
