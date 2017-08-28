import axios from 'axios';

export default class Post {

  constructor() {

  }

  getPosts = async ({ limit = 10, offset = 0 }) => {
    try {
      const { data } = await axios.get(`http://dxlab.sl.nsw.gov.au/wp-json/wp/v2/posts/?per_page=${limit}&offset=${offset}`);

      return data.map(item => {
        return mapWordpressFields(item);
      });
    } catch(e) {
      console.log(e);
    }
  }

  getPost = async ({ id }) => {
    try {
      const { data } = await axios.get(`http://dxlab.sl.nsw.gov.au/wp-json/wp/v2/posts/${id}`);
      return mapWordpressFields(data);
    } catch(e) {
      console.log(e);
    }
  }

}

function mapWordpressFields(data) {
  const {
    id,
    title,
    date,
    slug,
    status,
    content,
    excerpt,
    author,
    featured_media,
    categories,
    tags,
  } = data;

  return {
    id,
    title: title.rendered,
    date,
    slug,
    status,
    content: content.rendered,
    excerpt: excerpt.rendered,
    author,
    featuredMedia: featured_media,
    categories,
    tags,
  }
}
