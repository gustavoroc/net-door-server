import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TORMEntityDoor } from './door.typeorm.entity';
import { TORMEntityUser } from './user.typeorm.entity';

@Entity()
export class TORMEntityChat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: string;

  @Column()
  createdAt: Date;

  @ManyToOne(() => TORMEntityUser, (user) => user.chats)
  user: TORMEntityUser;

  @ManyToOne(() => TORMEntityDoor, (door) => door.chats)
  door: TORMEntityDoor
}
