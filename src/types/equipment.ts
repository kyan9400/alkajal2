export type Product = {
  id: string;
  name: string;
  description: string;
  badge: string;
  image: string;
  availability: "متوفر";
};

export type EquipmentCategory = {
  id: string;
  title: string;
  products: Product[];
};
