export default {
  name: 'servicesSection',
  title: 'Services',
  type: 'object',
  fields: [
    { name: 'title', type: 'string' },
    {
      name: 'services',
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