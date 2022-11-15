class UnauthorizedError extends Error {
  constructor (...params) {
    super(...params)
    this.statusCode = '403'
  }
}

class UserInputError extends Error {
  constructor (...params) {
    super(...params)
    this.statusCode = '400'
  }
}

export {
  UnauthorizedError,
  UserInputError
}
