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
      title: 'Text Color',
      name: 'color',
      type: 'string'
    },
    {
      title: 'Background Color',
      name: 'backgroundColor',
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
