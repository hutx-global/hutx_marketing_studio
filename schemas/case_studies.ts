export default {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    { name: 'client', type: 'string' },
    { name: 'industry', type: 'string' },
    { name: 'problem', type: 'text' },
    { name: 'solution', type: 'text' },
    { name: 'results', type: 'array', of: [{ type: 'string' }] },
  ],
}