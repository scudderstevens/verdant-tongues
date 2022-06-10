import { BsDiagram3Fill } from 'react-icons/bs'

export default {
  name: 'endPoint',
  title: 'EndPoint',
  type: 'document',
  icon: BsDiagram3Fill,
  initialValue: () => ({
    isSubdomain: false,
  }),
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        `The title for this EndPoint, for use in META and in COPY.`,
      options: { maxLength: 96 }
    },
    {
      name: 'name',
      title: 'Name',
      type: 'slug',
      description:
        `The name for this EndPoint, when referenced in CODE.`,
      options: {
        source: 'title',
        maxLength: 64, // will be ignored if slugify is set
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 64)
      }
    },
    {
      name: 'isSubdomain',
      title: 'Is SubDomain of this system?',
      type: 'boolean',
    },
    {
      name: 'domain',
      title: 'Domain',
      type: 'slug',
      description:
        `The domain for this EndPoint.`,
      hidden: ({ document }) => document?.isSubdomain === true,
      options: {
        maxLength: 64, // will be ignored if slugify is set
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 64)
      }
    },
    {
      name: 'domainExt',
      title: 'Extension',
      type: 'string',
      description:
        `The domain extension for this EndPoint.`,
      hidden: ({ document }) => document?.isSubdomain === true,
      options: {
          list: [
            {title: '.com', value: 'com'},
            {title: '.ch', value: 'ch'},
            {title: '.me', value: 'me'}
          ],
      }
    },
    {
      name: 'subdomain',
      title: 'SubDomain',
      type: 'slug',
      description:
        `The SubDomain for this EndPoint.`,
      hidden: ({ document }) => document?.isSubdomain === false,
      options: {
        maxLength: 32,
      }
    },
    {
      name: "teaser",
      title: "Teaser Description",
      type: "text",
      rows: 3,
      description:
        `A description of this EndPoint, for use in META DESCRIPTION and in COPY.`,
      options: { maxLength: 140 }
    },
    {
      name: 'services',
      title: 'Service(s)',
      type: 'array',
      of: [
        { type: 'msg' }
      ]
    }
  ]
}