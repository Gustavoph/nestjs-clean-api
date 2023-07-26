import { Response } from 'express'
import { Controller, Post, HttpStatus, Res, Body } from '@nestjs/common'

import { CreateUserUseCase } from '@/app/use-cases/user/create-user-use-case'

import { CreateUserDto } from '../../dtos/user/create-user.dto'

@Controller('user')
export class UserController {
  constructor (private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async create (@Res() res: Response, @Body() body: CreateUserDto) {
    await this.createUserUseCase.handle(body)
    return res.status(HttpStatus.CREATED).send()
  }
}
