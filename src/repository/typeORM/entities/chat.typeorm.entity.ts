import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TORMEntityDoor } from './door.typeorm.entity';
import { TORMEntityUser } from './user.typeorm.entity';

@Entity()
export class TORMEntityChat {
  constructor(data: string, createdAt: Date, userId: string, doorId: string) {
    this.data = data;
    this.createdAt = createdAt;
    this.userId = userId;
    this.doorId = doorId;
  }

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  data: string;

  @Column()
  createdAt: Date;

  @Column()
  userId: string;

  @Column()
  doorId: string;

  @ManyToOne(() => TORMEntityUser, (user) => user.chats)
  @JoinColumn({ name: 'userId' })
  user: TORMEntityUser;

  @ManyToOne(() => TORMEntityDoor, (door) => door.chats)
  @JoinColumn({ name: 'doorId' })
  door: TORMEntityDoor;
}
