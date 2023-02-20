import { ChatDTO } from './chat.dto';
import { DoorDTO } from './door.dto';

export class UserDTO {
  constructor(
    public name: string,
    public email: string,
    public id: string,
    public password: string,
    public createdAt: Date,
    public doors?: DoorDTO[],
    public chats?: ChatDTO[],
  ) {}
}
