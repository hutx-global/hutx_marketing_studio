export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'excerpt', type: 'text' },
    { name: 'mainImage', type: 'image' },
    { name: 'publishedAt', type: 'datetime' },
    { name: 'body', type: 'array', of: [{ type: 'block' }] },
  ],
}