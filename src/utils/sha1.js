// TODO: to be deprecated
'use strict'

import { createHash } from 'crypto'

function getSha1 (email) {
  return createHash('sha1').update(email).digest('hex')
}

export default getSha1
