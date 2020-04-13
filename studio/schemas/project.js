export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    // {
    //   name: 'publishedAt',
    //   title: 'Published at',
    //   description: 'You can use this field to schedule projects where you show them',
    //   type: 'datetime'
    // },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text'
    },
    {
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url'
    },
    {
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url'
    },
    // {
    //   name: 'members',
    //   title: 'Members',
    //   type: 'array',
    //   of: [{ type: 'projectMember' }]
    // },
    {
      name: 'year',
      title: 'Year',
      type: 'string'
    },
    {
      name: 'color',
      title: 'Project color',
      type: 'string'
    },
    // {
    //   name: 'startedAt',
    //   title: 'Started at',
    //   type: 'datetime'
    // },
    // {
    //   name: 'endedAt',
    //   title: 'Ended at',
    //   type: 'datetime'
    // },
    {
      name: 'imageMobile1',
      title: 'Mobile screenshot 1',
      type: 'mainImage'
    },
    {
      name: 'imageMobile2',
      title: 'Mobile screenshot 2',
      type: 'mainImage'
    },
    {
      name: 'imageMobile3',
      title: 'Mobile screenshot 3',
      type: 'mainImage'
    },
    {
      name: 'imageDesktop',
      title: 'Desktop screenshot',
      type: 'mainImage'
    },
    {
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tool' } }]
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    // {
    //   name: 'relatedProjects',
    //   title: 'Related projects',
    //   type: 'array',
    //   of: [{ type: 'reference', to: { type: 'project' } }]
    // }
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
