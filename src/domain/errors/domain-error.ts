export class DomainError extends Error {
  constructor (
    public readonly message: string,
    public readonly statusCode: number
  ) {
    super(message)

    this.message = message
    this.statusCode = statusCode || 500

    Error.captureStackTrace(this, this.constructor)
  }
}
