export default interface hotel {
  id: string;
  createdAt: Date;
  name: string;
  images: string[];
  shortLocation: string;
  size: string;
  price: number;
  availability: {
    start: string;
    end: string;
  };
}
