export default {
  type: 'document',
  name: 'tool',
  title: 'Tools',
  fields: [
    {
      title: 'Tool name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Color',
      name: 'color',
      type: 'string'
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'string'
    },
  ],
  // preview: {
  //   select: {
  //     name: 'name',
  //   }
  // }
}
