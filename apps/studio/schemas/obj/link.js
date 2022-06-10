export default {
  title: 'Link',
  name: 'link',
  type: 'object',
  initialValue: () => ({
    isExternal: false,
  }),
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'isExternal',
      title: 'isExternal',
      type: 'boolean',
    },
    {
      name: 'link',
      title: 'External link',
      type: 'string',
      description: 
        `Example: https://www.love.com`,
    },
    {
      name: 'path',
      title: 'Path',
      type: 'string',
      description:
        `Example: blog`,
    },
  ]
}