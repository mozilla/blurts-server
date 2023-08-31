/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const genericErrorMessage = 'Something went wrong. Please try again or come back later.'
const permissionErrorMessage = 'You don’t have permission to access this content.'
const tooManyRequestsErrorMessage = 'Too many requests received. Please try again later. '

class BadRequestError extends Error {
  /**
   * @param {string | undefined} message
   * @param {Array<object>} config
   */
  constructor (message, ...config) {
    super(message, ...config)
    // TODO: Add unit test when changing this code:
    /* c8 ignore next */
    this.message = message || genericErrorMessage
    this.name = 'Bad Request'
    this.statusCode = 400
  }
}

class UnauthorizedError extends Error {
  /**
   * @param {string | undefined} message
   * @param {Array<object>} config
   */
  constructor (message, ...config) {
    super(message, ...config)
    this.name = 'Unauthorized'
    this.statusCode = 401
    // TODO: Add unit test when changing this code:
    /* c8 ignore next */
    this.message = message || permissionErrorMessage
  }
}

class ForbiddenError extends Error {
  /**
   * @param {string | undefined} message
   * @param {Array<object>} config
   */
  constructor (message, ...config) {
    super(message, ...config)
    this.name = 'Forbidden'
    this.statusCode = 403
    // TODO: Add unit test when changing this code:
    /* c8 ignore next */
    this.message = message || permissionErrorMessage
  }
}

class MethodNotAllowedError extends Error {
  /**
   * @param {string} [message]
   * @param {Array<object>} config
   */
  constructor (message, ...config) {
    super(message, ...config)
    this.name = 'Method Not Allowed'
    this.statusCode = 405
    // TODO: Add unit test when changing this code:
    /* c8 ignore next */
    this.message = message || genericErrorMessage
  }
}
class ConflictError extends Error {
  /**
   * @param {string | undefined} message
   * @param {Array<object>} config
   */
  constructor (message, ...config) {
    super(message, ...config)
    this.name = 'Conflict'
    this.statusCode = 409
    // TODO: Add unit test when changing this code:
    /* c8 ignore next */
    this.message = message || genericErrorMessage
  }
}

class TooManyRequestsError extends Error {
  /**
   * @param {string | undefined} message
   * @param {Array<object>} config
   */
  constructor (message, ...config) {
    super(message, ...config)
    this.name = 'Too Many Requests'
    this.statusCode = 429
    // TODO: Add unit test when changing this code:
    /* c8 ignore next */
    this.message = message || tooManyRequestsErrorMessage
  }
}

class InternalServerError extends Error {
  /**
   * @param {string | undefined} message
   * @param {Array<object>} config
   */
  constructor (message, ...config) {
    super(message, ...config)
    this.name = 'Internal Server Error'
    this.statusCode = 500
    // TODO: Add unit test when changing this code:
    /* c8 ignore next */
    this.message = message || genericErrorMessage
  }
}

export {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  MethodNotAllowedError,
  ConflictError,
  TooManyRequestsError,
  InternalServerError
}
