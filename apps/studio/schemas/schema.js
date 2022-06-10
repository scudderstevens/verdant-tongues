import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import endPoint from './doc/endPoint'
import link from './obj/link'
import msg from './srv/msg'
import msgPortableText from './obj/msgPortableText'
import node from './doc/node'
import settings from './doc/settings'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    endPoint,
    link,
    msg,
    msgPortableText,
    node,
    settings,
  ]),
})
