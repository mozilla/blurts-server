'use strict'

// See https://jestjs.io/docs/en/manual-mocks
function MessageValidator () {}
MessageValidator.prototype.validate = function (hash, cb) {
  if (hash.Signature === 'invalid') {
    cb(new Error('The message signature is invalid.'))
    return
  }
  cb(null, hash)
}

module.exports = MessageValidator
