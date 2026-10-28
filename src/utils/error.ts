/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const genericErrorMessage =
  "Something went wrong. Please try again or come back later.";
const permissionErrorMessage =
  "You don’t have permission to access this content.";
const tooManyRequestsErrorMessage =
  "Too many requests received. Please try again later. ";

type MessageType = string | undefined;
type ConfigType = Array<object>;

class BadRequestError extends Error {
  public statusCode: number;

  constructor(message: MessageType, ...config: ConfigType) {
    super(message, ...config);
    // TODO: Add unit test when changing this code:
    /* c8 ignore next */
    this.message = message || genericErrorMessage;
    this.name = "Bad Request";
    this.statusCode = 400;
  }
}

class UnauthorizedError extends Error {
  public statusCode: number;

  constructor(message: MessageType, ...config: ConfigType) {
    super(message, ...config);
    this.name = "Unauthorized";
    this.statusCode = 401;
    // TODO: Add unit test when changing this code:
    /* c8 ignore next */
    this.message = message || permissionErrorMessage;
  }
}

class ForbiddenError extends Error {
  public statusCode: number;

  constructor(message: MessageType, ...config: ConfigType) {
    super(message, ...config);
    this.name = "Forbidden";
    this.statusCode = 403;
    // TODO: Add unit test when changing this code:
    /* c8 ignore next */
    this.message = message || permissionErrorMessage;
  }
}

class MethodNotAllowedError extends Error {
  public statusCode: number;

  constructor(message?: string, ...config: ConfigType) {
    super(message, ...config);
    this.name = "Method Not Allowed";
    this.statusCode = 405;
    // TODO: Add unit test when changing this code:
    /* c8 ignore next */
    this.message = message || genericErrorMessage;
  }
}
class ConflictError extends Error {
  public statusCode: number;

  constructor(message: MessageType, ...config: ConfigType) {
    super(message, ...config);
    this.name = "Conflict";
    this.statusCode = 409;
    // TODO: Add unit test when changing this code:
    /* c8 ignore next */
    this.message = message || genericErrorMessage;
  }
}

class TooManyRequestsError extends Error {
  public statusCode: number;

  constructor(message: MessageType, ...config: ConfigType) {
    super(message, ...config);
    this.name = "Too Many Requests";
    this.statusCode = 429;
    // TODO: Add unit test when changing this code:
    /* c8 ignore next */
    this.message = message || tooManyRequestsErrorMessage;
  }
}

/** A service we depend on failed */
class UpstreamUnavailableError extends Error {
  public readonly status?: number;

  /**
   * @param upstream The service that failed
   * @param reason How it failed, e.g. "timeout"
   * @param options status: HTTP status, when it sent one
   */
  constructor(
    public readonly upstream: "hibp",
    public readonly reason: string,
    options: ErrorOptions & { status?: number } = {},
  ) {
    super(`${upstream} is unavailable: ${reason}`, options);
    this.name = "UpstreamUnavailableError";
    this.status = options.status;
  }
}

export {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  MethodNotAllowedError,
  ConflictError,
  TooManyRequestsError,
  UpstreamUnavailableError,
};
