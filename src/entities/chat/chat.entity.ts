import { v4 as uuidv4 } from 'uuid';

export interface ChatData {
  data: string;
  date: Date;
  userId: string;
  chatId: string;
}

export class Chat {
  private chatId: string;

  constructor(
    private date: Date,
    private data: string,
    private userId: string,
  ) {
    this.generateUUID();
  }

  private generateUUID() {
    this.chatId = uuidv4();
  }

  public getChatInformation(): ChatData {
    const data = this.data;
    const date = this.date;
    const userId = this.userId;
    const chatId = this.chatId;

    return {
      date,
      data,
      userId,
      chatId,
    };
  }
}
