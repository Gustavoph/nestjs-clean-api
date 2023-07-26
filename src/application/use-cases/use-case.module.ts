import { Module } from '@nestjs/common'

import { CreateUserUseCase } from './user/create-user-use-case'

import { DatabaseModule } from '@/infra/database/database.module'

@Module({
  imports: [DatabaseModule],
  providers: [CreateUserUseCase],
  exports: [CreateUserUseCase]
})
export class UseCasesModule {}
