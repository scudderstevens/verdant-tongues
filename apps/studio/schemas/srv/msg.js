import { BsExclamationTriangle, BsImageFill } from 'react-icons/bs'

export default {
  name: 'msg',
  title: 'Messaging',
  type: 'object',
  icon: BsExclamationTriangle,
  fields: [
    {
      name: 'media',
      title: 'Media',
      type: 'image',
    },
    {
      name: 'text',
      title: 'Message Text',
      type: 'msgPortableText',
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'link',
    },
  ],
  preview: {
    select: { i: '' },
    prepare({i}) {
      let t = "Message Title"
      let s = "Message Teaser"
      return {
        title: t,
        subtitle: s,
        media: i ? BsExclamationTriangle : BsImageFill
      }
    }
  }
}