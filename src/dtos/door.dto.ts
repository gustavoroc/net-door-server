import { ChatDTO } from './chat.dto';
import { UserDTO } from './user.dto';

export class DoorDTO {
  name: string;
  id: string;
  users?: UserDTO[];
  conversations?: ChatDTO[];
  createdAt: Date;

  constructor(id: string, name: string, createdAt: Date) {
    this.name = name;
    this.id = id;
    this.createdAt = createdAt;
  }
}
