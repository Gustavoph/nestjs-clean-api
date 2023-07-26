import { Module } from '@nestjs/common'
import { InfraModule } from './infra/modules/infra.module'

@Module({
  imports: [InfraModule]
})
export class AppModule {}
