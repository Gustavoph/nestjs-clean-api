import { CreateUserUseCase } from '@/application/use-cases/user/create-user-use-case'
import { Controller, Post, HttpStatus, HttpCode } from '@nestjs/common'
import { CustomHttpException } from '../view-models/use-case-error.view-model'

@Controller('user')
export class UserController {
  constructor (private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  @HttpCode(201)
  async create () {
    const output = await this.createUserUseCase.handle({
      name: 'Gustavo',
      email: 'gusta@mail.com'
    })

    if (output.isLeft()) {
      return new CustomHttpException(output.value.message, HttpStatus.BAD_REQUEST)
    }
  }
}
