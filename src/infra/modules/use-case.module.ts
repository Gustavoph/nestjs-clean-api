import { Module } from '@nestjs/common'

import { DatabaseModule } from './database.module'
import { CreateUserUseCase } from '@/app/use-cases/user/create-user-use-case'
import { UsersRepository } from '@/app/contracts/user-repository'

@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: CreateUserUseCase,
      useFactory: (usersRepository: UsersRepository):
      CreateUserUseCase => new CreateUserUseCase(usersRepository),
      inject: [UsersRepository]
    }
  ],
  exports: [CreateUserUseCase]
})
export class UseCasesModule {}
