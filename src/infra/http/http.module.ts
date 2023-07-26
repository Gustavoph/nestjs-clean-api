import { Module } from '@nestjs/common'
import { UseCasesModule } from '@/application/use-cases/use-case.module'
import { UserController } from './controllers/user.controller'

@Module({
  imports: [UseCasesModule],
  controllers: [UserController]
})
export class HttpModule {}
