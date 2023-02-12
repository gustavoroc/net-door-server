import { Chat } from '../chat/chat.entity';
import { User } from '../user/user.entity';

export class Door {
  private users: User[];
  private conversation: Chat[];

  private userObservers: Function[] = [];
  private conversationObservers: Function[] = [];

  constructor(
    readonly name: string,
    readonly createdAt = new Date(),
    users?: User[],
    conversation?: Chat[],
  ) {
    users ? (this.users = users) : (this.users = []);
    conversation
      ? (this.conversation = conversation)
      : (this.conversation = []);
  }

  public subscribeToUsers(observerFn: Function): void {
    this.userObservers.push(observerFn);
  }

  public subscribeToConversation(observerFn: Function): void {
    this.conversationObservers.push(observerFn);
  }

  private notifyAllUserObservers() {
    this.userObservers.forEach((observerFn) => {
      observerFn(this.connectedUsers());
    });
  }

  private notifyAllConversationObservers() {
    this.conversationObservers.forEach((observerFn) => {
      observerFn(this.conversationLog());
    });
  }

  public connectUser(user: User): void {
    this.users.push(user);
    this.notifyAllUserObservers();
  }

  public connectedUsers(): User[] {
    return this.users;
  }

  public addChat(chat: Chat): void {
    this.conversation.push(chat);
    this.notifyAllConversationObservers();
  }

  public conversationLog(): Chat[] {
    return this.conversation;
  }
}
