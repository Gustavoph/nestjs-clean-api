import { Module } from '@nestjs/common'
import { UseCasesModule } from '@/application/use-cases/use-case.module'
import { DatabaseModule } from '../database/database.module'
import { UserController } from './controllers/user.controller'

@Module({
  controllers: [UserController],
  providers: [
    DatabaseModule,
    UseCasesModule
  ]
})
export class HttpModule {}
