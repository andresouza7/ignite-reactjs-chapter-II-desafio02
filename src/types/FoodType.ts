export interface FoodType {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

export type FoodFormProps = Omit<FoodType, "id" | "available">