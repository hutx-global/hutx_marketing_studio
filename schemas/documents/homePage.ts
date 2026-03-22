import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      initialValue: 'Homepage',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroHighlight',
      title: 'Hero Highlight Text',
      type: 'string',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Subheadline',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA',
      type: 'link',
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA',
      type: 'link',
    }),

    defineField({
      name: 'auditTitle',
      title: 'Audit Section Title',
      type: 'string',
    }),
    defineField({
      name: 'auditBullets',
      title: 'Audit Bullets',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'proofTitle',
      title: 'Proof Section Title',
      type: 'string',
    }),
    defineField({
      name: 'proofStats',
      title: 'Proof Stats',
      type: 'array',
      of: [{type: 'stat'}],
    }),

    defineField({
      name: 'painPointsTitle',
      title: 'Pain Points Section Title',
      type: 'string',
    }),
    defineField({
      name: 'painPoints',
      title: 'Pain Points',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'servicesTitle',
      title: 'Services Section Title',
      type: 'string',
    }),
    defineField({
      name: 'serviceCards',
      title: 'Service Cards',
      type: 'array',
      of: [{type: 'serviceCard'}],
    }),

    defineField({
      name: 'processTitle',
      title: 'Process Section Title',
      type: 'string',
    }),
    defineField({
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      of: [{type: 'processStep'}],
    }),

    defineField({
      name: 'finalCtaHeadline',
      title: 'Final CTA Headline',
      type: 'string',
    }),
    defineField({
      name: 'finalCtaText',
      title: 'Final CTA Text',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'finalCtaButton',
      title: 'Final CTA Button',
      type: 'link',
    }),

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'heroHeadline',
    },
  },
})