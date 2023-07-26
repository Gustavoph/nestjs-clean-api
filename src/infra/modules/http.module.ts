import { Module } from '@nestjs/common'
import { UseCasesModule } from '../modules/use-case.module'

import { UserController } from '../http/presenters/controllers/user.controller'

@Module({
  imports: [UseCasesModule],
  controllers: [UserController]
})
export class HttpModule {}
