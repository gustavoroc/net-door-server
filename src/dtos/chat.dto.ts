export class ChatDTO {
  data: string;
  id: string;
  createdAt: Date;

  constructor(data: string, id: string, createdAt: Date) {
    this.data = data;
    this.id = id;
    this.createdAt = createdAt;
  }
}
