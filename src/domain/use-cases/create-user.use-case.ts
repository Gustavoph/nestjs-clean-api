import { type UseCase } from './use-case'
import { type User } from '../entities/user.entity'

export interface ICreateUserUseCaseRequest {
  name: string
  email: string
}

export interface ICreateUserUseCaseResponse {
  user: User
}

export abstract class ICreateUserUseCase implements UseCase {
  handle: (request: ICreateUserUseCaseRequest) => Promise<ICreateUserUseCaseResponse>
}
