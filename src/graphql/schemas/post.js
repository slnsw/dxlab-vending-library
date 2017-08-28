import axios from 'axios';

import Post from '../models/Post';

export const postSchema = [`
  type Post {
    id: Int
    title: String
    date: String
    slug: String
    status: String
    content: String
    excerpt: String
    author: Int
    featuredMedia: Int
    categories: [Int]
    tags: [Int]
  }
`];

const post = new Post();

export const postResolver = {
  Query: {
    posts(src, { limit, offset }) {
      return post.getPosts({ limit, offset });
    },
    post(src, { id }) {
      return post.getPost({ id });
    },
  },
};
