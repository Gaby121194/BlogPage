import { User } from "../../users/users.model";

export interface Article {
    user: User;
    date: Date;
    content: string;
    title: string;
    category: 'Economy' | 'Cooking' | 'Entertaiment' | 'Politics' | 'Research' | 'Culture';
    id: number;

    //UI
    favorite?: boolean;
  }
  