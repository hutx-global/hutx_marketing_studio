import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'pricing',
  title: 'Pricing Plan',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'highlight',
      type: 'boolean',
    }),
    defineField({
      name: 'ctaText',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      type: 'string',
    }),
    defineField({
      name: 'order',
      type: 'number',
    }),
  ],
})