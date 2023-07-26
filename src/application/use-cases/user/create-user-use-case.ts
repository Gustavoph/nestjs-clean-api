import { User } from '@/domain/entities/user.entity'
import { type UsersRepository } from '@/application/contracts/user-repository'
import { UserAlreadyRegisteredError } from '@/domain/errors/user/user-already-registered-error'
import { type ICreateUserUseCase, type ICreateUserUseCaseRequest, type ICreateUserUseCaseResponse } from '@/domain/use-cases/create-user.use-case'

export class CreateUserUseCase implements ICreateUserUseCase {
  constructor (private readonly usersRepository: UsersRepository) { }
  async handle (request: ICreateUserUseCaseRequest): Promise<ICreateUserUseCaseResponse> {
    const { name, email } = request

    const userAlreadyExists = await this.usersRepository.findByEmail(email)
    if (userAlreadyExists) throw new UserAlreadyRegisteredError(name)

    const user = User.create({ name, email })
    await this.usersRepository.create(user)

    return { user }
  }
}
