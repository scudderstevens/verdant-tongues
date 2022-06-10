export default {
  name: 'settings',
  type: 'document',
  title: 'System Settings',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description:
        `The name of this system.`,
    },
    {
      name: 'domain',
      title: 'Domain',
      type: 'slug',
      description:
        `The default domain for this system.`,
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
        `The default domain extension for this system.`,
      options: {
          list: [
            {title: '.com', value: 'com'},
            {title: '.ch', value: 'ch'},
            {title: '.me', value: 'me'}
          ],
      }
    },
    {
      name: 'services',
      title: 'Service(s)',
      type: 'array',
      of: [
        { type: 'msg' }
      ]
    }
    /*
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'The title of this system',
      options: { maxLength: 96 }
    },*/
    /*
    {
      name: 'openGraph',
      title: 'Open graph',
      type: 'openGraph'
      description:
        `The default meta tags on all pages that have not been set at the EndPoint level.`,
    },
    */
    /*
    {
      name: 'primaryColor',
      title: 'Primary brand color',
      type: 'color',
      description:
        `Used to generate the primary accent color for websites, press materials, etc`
    },
    */
    /*
    {
      name: 'secondaryColor',
      title: 'Secondary brand color',
      type: 'color',
      description:
        `Used to generate the secondary accent color for websites, press materials, etc`
    }
    */
  ]
}