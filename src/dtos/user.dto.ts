export class UserDTO {
  name: string;
  email: string;
  id: string;
  createdAt: Date;

  constructor(name: string, email: string, id: string, createdAt: Date) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.createdAt = createdAt;
  }
}
