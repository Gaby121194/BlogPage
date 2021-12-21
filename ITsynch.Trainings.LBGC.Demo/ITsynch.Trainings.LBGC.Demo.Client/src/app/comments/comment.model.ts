import { User } from "../users/users.model";

export interface Comment {
  user: User;
  content: string;
  date: Date;
  IdArticle: number;
  id: number;
}
