export default {
  name: 'inspirationItem',
  title: 'Inspiration Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text'
    },
    {
      name: 'portfolioUrl',
      title: 'Portfolio URL',
      type: 'url'
    },
    {
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url'
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string'
    },
    {
      name: 'imageMobile1',
      title: 'Mobile screenshot 1',
      type: 'mainImage'
    },
    // {
    //   name: 'body',
    //   title: 'Body',
    //   type: 'blockContent'
    // },
  ],
  preview: {
    select: {
      title: 'name',
      image: 'imageMobile1'
    },
    prepare ({ title = 'No title', publishedAt, image }) {
      return {
        title,
        // subtitle: publishedAt
          // ? new Date(publishedAt).toLocaleDateString()
          // : 'Missing publishing date',
        media: image
      }
    }
  }
}
