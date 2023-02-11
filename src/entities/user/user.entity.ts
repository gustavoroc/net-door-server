import { Door } from '../door/door.entity';

export class User {
  private friendList: User[] = [];
  private doors: Door[] = [];

  constructor(
    private name: string,
    private email: string,
    private createdAt: Date,
    private id: string,
  ) {}

  public addFriend(friend: User): void {
    this.friendList.push(friend);
  }

  public getFriends(): User[] {
    return this.friendList;
  }

  public addDoor(door: Door): void {
    this.doors.push(door);
  }

  public getDoors(): Door[] {
    return this.doors;
  }
}
