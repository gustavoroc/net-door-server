import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TORMEntityChat } from './chat.typeorm.entity';

@Entity()
export class TORMEntityUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  createdAt: Date;

  @OneToMany(() => TORMEntityChat, (chat) => chat.user)
  chats: TORMEntityChat[];
}
