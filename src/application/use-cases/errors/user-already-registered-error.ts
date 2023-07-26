export class UserAlreadyRegisteredError extends Error {
  constructor (name: string) {
    super(`The user ${name} is already registered.`)
    this.name = 'UserAlreadyRegisteredError'
  }
}
