import { Inject, Injectable } from '@nestjs/common';
import { IDoorRepository } from 'src/interfaces/door-repository.interface';
import { Repository } from 'typeorm';
import { TORMEntityChat } from '../entities/chat.typeorm.entity';

@Injectable()
export class ChatTypeORMRepository implements IDoorRepository {
  constructor(
    @Inject('TORM_CHAT_REPOSITORY')
    private chatRepository: Repository<TORMEntityChat>,
  ) {}

  async findAll(): Promise<TORMEntityChat[]> {
    return this.chatRepository.find();
  }
}
