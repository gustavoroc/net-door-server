import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TORMEntityChat } from './chat.typeorm.entity';
import { TORMEntityUser } from './user.typeorm.entity';

@Entity()
export class TORMEntityDoor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  createdAt: Date;

  @ManyToMany(() => TORMEntityUser)
  @JoinTable()
  users: TORMEntityUser[];

  @OneToMany(() => TORMEntityChat, (chat) => chat.door)
  chats: TORMEntityChat[];
}
