// export default {
//   widgets: [
//     { name: 'structure-menu' },
//     {
//       name: 'project-info',
//       options: {
//         __experimental_before: [
//           {
//             name: 'netlify',
//             options: {
//               description:
//                 'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
//               sites: [
//                 {
//                   buildHookId: '5e5c69dd47370fadf6b049ca',
//                   title: 'Admin Site (Sanity Studio)',
//                   name: 'visiteggharboradmin',
//                   apiId: '9810b3d8-43f2-4eb4-a5e9-9aff66e1e9a9'
//                 },
//                 {
//                   buildHookId: '5e5c69ddd2a6049f5e094bc5',
//                   title: 'Live Website',
//                   name: 'visiteggharbor',
//                   apiId: '5004f276-fba2-465b-9fde-fa710921b5a2'
//                 }
//               ]
//             }
//           }
//         ],
//         data: [
//           {
//             title: 'GitHub repo',
//             value: 'https://github.com/ajzeller/point-beach-house-gatsby-sanity',
//             category: 'Code'
//           },
//           { title: 'Frontend', value: 'https://visiteggharbor.com', category: 'apps' }
//         ]
//       }
//     },
//     { name: 'project-users', layout: { height: 'auto' } },
//     {
//       name: 'document-list',
//       options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
//       layout: { width: 'medium' }
//     }
//   ]
// }

export default {
  widgets: [
    {
      name: 'project-info',
      options: {
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ajzeller/zellerio_gatsby',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://zeller.io', category: 'apps' }
        ]
      }
    },
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'admin.zeller.io (Sanity Studio)',
            apiId: '360d363a-2ad1-4583-a4d0-9d6389eea912',
            buildHookId: '5e742ab4c3b7e00caf8e6a67',
            name: 'zellerio-admin',
          },
          {
            title: 'zeller.io',
            apiId: 'f2675638-5c21-47ce-9598-614129d52177',
            buildHookId: '5e742f2e1d2f97b63db40277',
            name: 'zellerio-gatsby'
          }
        ]
      }
    },
    {
      name: 'project-users'
    },
    {
      name: 'document-list',
      options: {
        title: 'Last edited documents',
        order: '_updatedAt desc',
      },
      layout: {
        width: 'auto',
        height: 'large'
      }
    },
    {
      name: 'document-list',
      options: {
        title: 'Last edited posts',
        order: '_updatedAt desc',
        types: ['post']
      }
    }
  ]
}