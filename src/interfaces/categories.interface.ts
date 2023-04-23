export interface Category {
  slug: string;
  description: string;
}

export type CategoryType = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}