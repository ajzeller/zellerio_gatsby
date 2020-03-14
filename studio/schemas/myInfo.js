import { MdAccountCircle } from 'react-icons/md'

export default {
  name: 'myInfo',
  title: 'My Info',
  type: 'document',
  // You probably want to uncomment the next line once you've made a companyInfo document in the Studio. This will remove the companyInfo document type from the create-menus.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  icon: MdAccountCircle,
  fields: [
    {
      name: 'name',
      title: 'My name',
      type: 'string'
    },
    {
      name: 'email',
      title: 'My Email',
      type: 'email'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage'
    },
  ]
}
