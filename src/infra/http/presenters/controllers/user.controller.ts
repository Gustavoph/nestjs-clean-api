import { Response } from 'express'
import { Controller, Post, HttpStatus, Res, Body } from '@nestjs/common'

import { CreateUserUseCase } from '@/application/use-cases/user/create-user-use-case'

import { CreateUserDto } from '../../dtos/user/create-user.dto'

@Controller('user')
export class UserController {
  constructor (private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async create (@Res() res: Response, @Body() body: CreateUserDto) {
    console.log(body)
    await this.createUserUseCase.handle({
      name: 'Gustavo',
      email: 'gusta@mail.com'
    })
    return res.status(HttpStatus.CREATED).send()
  }
}
