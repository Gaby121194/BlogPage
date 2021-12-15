import { User } from "../users/users.model";

export interface Article {
    user: User;
    date: Date;
    content: string;
    title: string;
    id: number;
  }
  