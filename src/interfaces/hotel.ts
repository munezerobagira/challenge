export default interface Hotel {
  id: string;
  createdAt: Date;
  name: string;
  images: imageObject[];
  shortLocation: string;
  size: string;
  price: number;
  availability: {
    start: string;
    end: string;
  };
}
export type imageObject = { url: string; hash: string; altText: string };
// {
//   "createdAt": "$date.current",
//   "name": "$address.streetAddress",
//   "images": [
//     {"url":"$image.city", "hash": "LEHV6nWB2yk8pyo0adR*.7kCMdnj", "altText":"$helpers.arrayElement(['free', 'basic', 'business'])"},
//     {"url":"$image.animals", "hash": "LEHV6nWB2yk8pyo0adR*.7kCMdnj", "altText":"$helpers.arrayElement(['free', 'basic', 'business'])"},
//     {"url":"$image.abstract", "hash": "LEHV6nWB2yk8pyo0adR*.7kCMdnj", "altText":"$helpers.arrayElement(['free', 'basic', 'business'])"}
//   ],
//   "location": "$address.secondaryAddress",
//   "shortLocation": "$address.secondaryAddress",
//   "availability": {
//     "start": "$date.recent",
//     "end": "$date.future"
//   },
//   "price": "$finance.amount"
// }
