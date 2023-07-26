import { Module } from '@nestjs/common'
import { CreateUserUseCase } from './user/create-user-use-case'

@Module({
  imports: [],
  providers: [CreateUserUseCase],
  exports: [CreateUserUseCase]
})
export class UseCasesModule {}
