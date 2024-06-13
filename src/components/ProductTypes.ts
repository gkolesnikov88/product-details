export interface ProductDetailsType {
  product_id: string;
  name: string;
  description: string;
  category: Category;
  collection: Collection;
  created_at: string;
  colors?: string[] | null;
  images?: ImagesEntity[] | null;
  info?: InfoEntity[] | null;
  inventory?: InventoryEntity[] | null;
  priceRange: PriceRange;
  rating: number;
  reviews: number;
  sizes?: string[] | null;
  sold: number;
}
export interface Category {
  category_id: string;
  name: string;
  created_at: string;
}
export interface Collection {
  collection_id: string;
  name: string;
  description: string;
  image_url: string;
  created_at: string;
}
export interface ImagesEntity {
  color: string;
  image_url: string;
}
export interface InfoEntity {
  title: string;
  description?: string[] | null;
}
export interface InventoryEntity {
  sku: string;
  color: string;
  size: string;
  list_price: number;
  discount?: null;
  discount_percentage: number;
  sale_price: number;
  sold: number;
  stock: number;
}
export interface PriceRange {
  highest: number;
  lowest: number;
}
