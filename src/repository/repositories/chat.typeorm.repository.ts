import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TORMEntityChat } from '../typeORM/entities/chat.typeorm.entity';

import { IChatRepository } from 'src/interfaces/chat-repository.interface';

@Injectable()
export class ChatTypeORMRepository implements IChatRepository {
  constructor(
    @Inject('TORM_CHAT_REPOSITORY')
    private chatRepository: Repository<TORMEntityChat>,
  ) {}
}
