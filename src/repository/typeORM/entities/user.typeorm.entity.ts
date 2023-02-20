import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TORMEntityChat } from './chat.typeorm.entity';

@Entity()
export class TORMEntityUser {
  constructor(name: string, email: string, createdAt: Date, password: string) {
    this.name = name;
    this.email = email;
    this.createdAt = createdAt;
    this.password = password;
  }

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  createdAt: Date;

  @OneToMany(() => TORMEntityChat, (chat) => chat.user, {
    onDelete: 'CASCADE',
  })
  chats: TORMEntityChat[];
}
