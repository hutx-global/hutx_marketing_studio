export default {
  name: 'pricing',
  title: 'Pricing Plan',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'price', type: 'string' },
    { name: 'features', type: 'array', of: [{ type: 'string' }] },
    { name: 'highlight', type: 'boolean' },
  ],
}