import { ChatDTO } from './chat.dto';
import { UserDTO } from './user.dto';

export class DoorDTO {
  constructor(
    public name: string,
    public id: string,
    public createdAt: Date,
    public users?: UserDTO[],
    public conversations?: UserDTO[],
  ) {}
}
