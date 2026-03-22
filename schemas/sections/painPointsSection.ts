export default {
  name: 'painPointsSection',
  title: 'Pain Points',
  type: 'object',
  fields: [
    { name: 'title', type: 'string' },
    {
      name: 'points',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};