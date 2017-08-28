import Primo from '../models/Primo';

const primo = new Primo();

export const primoSchema = [`
  type Primo {
    id: Int
    title: String
    date: String
    format: String
    type: String
    name: String
    url: String
  }
`];

export const primoResolver = {
  Query: {
    primoSearch(src, { q, limit, offset }) {
      return primo.search(q, limit, offset);
    },
  },
};
