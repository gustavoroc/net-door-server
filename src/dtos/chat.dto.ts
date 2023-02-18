export class ChatDTO {
  date?: Date;
  data: string;
  id: string;
  createdAt: Date;

  constructor(date: Date, data: string, id: string, createdAt: Date) {
    this.date = date;
    this.data = data;
    this.id = id;
    this.createdAt = createdAt;
  }
}
