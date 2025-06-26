export type ProductProps = {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  images: string[];
  colors: {
    name: string;
    value: string; // HEX color
  }[];
  sizes: string[];
  highlights: string[];
  tags: string[];
  description: string;
  specifications: {
    Material: string;
    Care: string;
    Fit: string;
    "Model Size": string;
  };
  shipping: string;
  returns: string;
  rating: number; // e.g., 4.5 out of 5
  reviewCount: number;
};
