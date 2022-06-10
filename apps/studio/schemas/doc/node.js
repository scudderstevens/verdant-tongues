import { BsRecord2Fill, BsRecord2 } from 'react-icons/bs';

export default {
  name: 'node',
  title: 'Node',
  type: 'document',
  icon: BsRecord2Fill,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      options: { maxLength: 96 }
    },
    {
      title: "Teaser Description",
      name: "teaser",
      type: "text",
      rows: 3,
      options: { maxLength: 140 }
    },
  ],
  preview: {
    select: {
      t: 'title',
      s: 'teaser',
      i: ''
    },
    prepare({ t, s, i }) {
      return {
        title: t,
        subtitle: s,
        media: i ? BsRecord2Fill : BsRecord2
      }
    }
  }
}