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
  id: string;

  @Column()
  name: string;

  @Column()
  createdAt: Date;

  @ManyToMany(() => TORMEntityUser, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  users: TORMEntityUser[];

  @OneToMany(() => TORMEntityChat, (chat) => chat.door, {
    onDelete: 'CASCADE',
  })
  chats: TORMEntityChat[];
}
