import { ChatDTO } from './chat.dto';
import { UserDTO } from './user.dto';

export class DoorDTO {
  constructor(
    public name: string,
    public id: string,
    public createdAt: Date,
    private users?: UserDTO[],
    public conversations?: UserDTO[],
  ) {}
}
