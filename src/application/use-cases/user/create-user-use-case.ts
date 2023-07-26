import { Injectable } from '@nestjs/common'

import { type UseCase } from '@/application/ports/use-case'
import { type UsersRepository } from '@/application/ports/user-repository'
import { left, type Either, right } from '@/core/logic/either'
import { UserAlreadyRegisteredError } from '../errors/user-already-registered-error'
import { User } from '@/domain/entities/user'

interface CreateUserUseCaseRequest {
  name: string
  email: string
}

type CreateUserUseCaseResponse = Either<UserAlreadyRegisteredError, { user: User }>

@Injectable()
export class CreateUserUseCase implements UseCase {
  constructor (private readonly usersRepository: UsersRepository) { }

  async handle (request: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
    const { name, email } = request

    const userAlreadyExists = await this.usersRepository.findByEmail(email)
    if (userAlreadyExists) return left(new UserAlreadyRegisteredError(name))

    const user = User.create({ name, email })
    await this.usersRepository.create(user)

    return right({ user })
  }
}
