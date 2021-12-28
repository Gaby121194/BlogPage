
export interface Filter {
    searchTitle: string;
    searchAuthor: number;
    createdTo: Date;
    createdFrom: Date;
    category: 'Economy' | 'Cooking' | 'Entertaiment' | 'Politics' | 'Research' | 'Culture';
  }
  