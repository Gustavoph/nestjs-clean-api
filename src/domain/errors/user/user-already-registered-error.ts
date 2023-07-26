import { DomainError } from '../domain-error'

const BAD_REQUEST = 400

export class UserAlreadyRegisteredError extends DomainError {
  constructor (name: string) {
    super(`The user '${name}' is already registered.`, BAD_REQUEST)
    this.name = 'UserAlreadyRegisteredError'
  }
}
