//TODO - refactor the name
export default interface hotel {
  id: string;
  createdAt: Date;
  name: string;
  images: string[];
  shortLocation: string;
  size: string;
  price: number;
  avaliabilty: {
    start: Date;
    end: Date;
  };
}
