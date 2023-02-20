import { DoorDTO } from './door.dto';
import { UserDTO } from './user.dto';

export class ChatDTO {
  constructor(
    private data: string,
    private id: string,
    private createdAt: Date,
    private owner: UserDTO,
    private door: DoorDTO,
  ) {}
}
