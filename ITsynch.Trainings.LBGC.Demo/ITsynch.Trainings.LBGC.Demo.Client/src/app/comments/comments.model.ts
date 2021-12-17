import { User } from "../users/users.model";

export interface Comments {
  user: User;
  content: string;
  date: Date;
  IdArticle: number;
}
