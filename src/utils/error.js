/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

class UserInputError extends Error {
  constructor (...params) {
    super(...params)
    this.statusCode = 400
  }
}

class UnauthorizedError extends Error {
  constructor (...params) {
    super(...params)
    this.statusCode = 403
  }
}

class NotFoundError extends Error {
  constructor (...params) {
    super(...params)
    this.statusCode = 404
  }
}
class MethodNotAllowedError extends Error {
  constructor (...params) {
    super(...params)
    this.statusCode = 405
  }
}

class RateLimitError extends Error {
  constructor (...params) {
    super(...params)
    this.statusCode = 429
  }
}

export {
  UnauthorizedError,
  UserInputError,
  NotFoundError,
  MethodNotAllowedError,
  RateLimitError

}
