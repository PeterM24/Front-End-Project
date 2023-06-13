export interface Category {
  slug: string;
  description: string;
}

export type CategoryType = {
  setSelectedCategory: (category: string) => void;
}