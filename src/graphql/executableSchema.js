import { merge } from 'lodash';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import { postSchema, postResolver } from './schemas/post';
import { primoSchema, primoResolver } from './schemas/primo';

const rootSchema = [`
  type Query {
    posts(limit: Int, offset: Int): [Post]
    post(id: Int): Post
    primoSearch(q: String, limit: Int, offset: Int): [Primo]
  }

  schema {
    query: Query
  }
`];

const schema = [
  ...rootSchema,
  ...postSchema,
  ...primoSchema,
];

// const rootResolvers = {
//   Query: {}
// };

const resolvers = merge(
  postResolver,
  primoResolver,
);

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});

export default executableSchema;

addMockFunctionsToSchema({
  schema: executableSchema,
  mocks: {},
  preserveResolvers: true,
});
