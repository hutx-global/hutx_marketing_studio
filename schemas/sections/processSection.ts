export default {
  name: 'processSection',
  title: 'Process',
  type: 'object',
  fields: [
    { name: 'title', type: 'string' },
    {
      name: 'steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'description', type: 'text' },
          ],
        },
      ],
    },
  ],
};