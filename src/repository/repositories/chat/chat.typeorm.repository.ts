import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TORMEntityChat } from 'src/repository/typeORM/entities/chat.typeorm.entity';
import { ChatDTO } from 'src/dtos/chat.dto';

@Injectable()
export class ChatTypeORMRepository {
  constructor(
    @Inject('TORM_CHAT_REPOSITORY')
    private chatRepository: Repository<TORMEntityChat>,
  ) {}

  async findAll(): Promise<TORMEntityChat[]> {
    return this.chatRepository.find({
      relations: ['user', 'door'],
    });
  }

  async addChat(chat: ChatDTO, userId: string, doorId: string) {
    const DB_chat = new TORMEntityChat(
      chat.data,
      chat.createdAt,
      userId,
      doorId,
    );
    const { data, id, createdAt } = await this.chatRepository.save(DB_chat);

    return new ChatDTO(data, id, createdAt);
  }
}
