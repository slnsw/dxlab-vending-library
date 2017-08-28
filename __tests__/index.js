import { graphql } from 'graphql';
import axios from 'axios';

import executableSchema from '../src/graphql/executableSchema';
import Primo from '../src/graphql/models/Primo';
import { schema as primoSchema } from '../src/graphql/schemas/primo';
// import handler from '../handler.js';

// it('should be a valid lambda handler', async () => {
//   console.log(handler.hello());
// })

/*
 * DX Lab Tests
 * -------------------------------------------------------------------------- */

it('should be post title from DX Lab WP API', async () => {
  // language=GraphQL
  const query = `
    {
      post(id: 2169) {
        id
        title
      }
    }
  `;

  const result = await graphql(executableSchema, query);
  const { data } = result;

  expect(data.post.title).toBe('DX Lab News');
});

it('should be 5 posts from DX Lab WP API', async () => {
  const query = `
  {
    posts(limit: 5) {
      id
      title
    }
  }
  `;

  const { data } = await graphql(executableSchema, query);
  expect(data.posts.length).toBe(5);
});

/*
 * Primo Tests
 * -------------------------------------------------------------------------- */

it('should be name of first record from Primo search API', async (done) => {
  const primo = new Primo();
  const data = await primo.search('coronelli');

  // console.log(data);

  expect(data[0].name).toBe('Coronelli, Vincenzo');
  done();
});

it('should be primo record from Primo API', async () => {
  // language=GraphQL
  const query = `
    {
      primoSearch(q: "coronelli") {
        id
        title
        type
      }
    }
  `;

  const result = await graphql(executableSchema, query);
  const { data } = result;

  expect(data.primoSearch[0].type).toBe('MAP');
});
