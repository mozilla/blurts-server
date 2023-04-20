/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

class UserInputError extends Error {
  /**
   * @param {[string?]} params
   */
  constructor (...params) {
    super(...params)
    this.statusCode = 400
    this.name = 'Bad request'
    this.message = 'The information provided is not valid. Please check and try again.'
  }
}

class UnauthorizedError extends Error {
  /**
   * @param {[string?]} params
   */
  constructor (...params) {
    super(...params)
    this.statusCode = 401
    this.name = 'Unauthorized'
    this.message = 'You don’t have permission to access this content.'
  }
}

class ForbiddenError extends Error {
  /**
   * @param {[string?]} params
   */
  constructor (...params) {
    super(...params)
    this.statusCode = 403
    this.name = 'Forbidden'
    this.message = 'You don’t have permission to access this content.'
  }
}

class MethodNotAllowedError extends Error {
  /**
   * @param {[string?]} params
   */
  constructor (...params) {
    super(...params)
    this.statusCode = 405
    this.name = 'Method Not Allowed'
    this.message = ''
  }
}

class TooManyRequestsError extends Error {
  /**
   * @param {[string?]} params
   */
  constructor (...params) {
    super(...params)
    this.statusCode = 429
    this.name = 'Too Many Requests'
    this.message = 'Too many requests received. Please try again later.'
  }
}

class InternalServerError extends Error {
  /**
   * @param {[string?]} params
   */
  constructor (...params) {
    super(...params)
    this.statusCode = 500
    this.name = 'Internal Server Error'
    this.message = 'Something went wrong. Please try again or come back later.'
  }
}

/**
 * Custom errors
 */

class ResolveBreachError extends InternalServerError {
  /**
   * Can’t mark breach as resolved
   *
   * @param {[string?]} params
   */
  constructor (...params) {
    super(...params)
    this.name = 'Resolve Breach Error'
  }
}

class OneRepError extends InternalServerError {
  /**
   * OneRep scan can’t start
   *
   * @param {[string?]} params
   */
  constructor (...params) {
    super(...params)
    this.name = 'OneRep Error'
  }
}

class DuplicateEmailError extends Error {
  /**
   * Duplicate email added
   *
   * @param {[string?]} params
   */
  constructor (...params) {
    super(...params)
    this.statusCode = 460
    this.name = 'Duplicate Email Error'
    this.message = 'This email has already been verified.'
  }
}

class AddEmailError extends Error {
  /**
   * Could not add email
   *
   * @param {[string?]} params
   */
  constructor (...params) {
    super(...params)
    this.statusCode = 461
    this.name = 'Add Email Error'
    this.message = 'Email couldn’t be added. Please try again.'
  }
}

class EmailVerificationError extends Error {
  /**
   * Email verification can’t be sent
   *
   * @param {[string?]} params
   */
  constructor (...params) {
    super(...params)
    this.statusCode = 462
    this.name = 'Email Verification Error'
    this.message = 'Email verification not sent. Please try again.'
  }
}

class BreachesError extends Error {
  /**
   * Data breach page: we couldn’t fetch the latest breaches
   *
   * @param {[string?]} params
   */
  constructor (...params) {
    super(...params)
    this.statusCode = 463
    this.name = 'Breaches Error'
    this.message = 'We couldn’t search for the latest breaches. Please refresh or try again later.'
  }
}

export {
  UserInputError,
  UnauthorizedError,
  ForbiddenError,
  MethodNotAllowedError,
  TooManyRequestsError,
  InternalServerError,
  DuplicateEmailError,
  AddEmailError,
  EmailVerificationError,
  BreachesError,
  ResolveBreachError,
  OneRepError
}
