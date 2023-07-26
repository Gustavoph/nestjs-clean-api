import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'

import { AppModule } from './app.module'
import { GlobalExceptionFilter } from './infra/http/exceptions/global-exception-filter'

async function bootstrap () {
  const app = await NestFactory.create(AppModule)
  app.useGlobalFilters(new GlobalExceptionFilter())
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000)
}
void bootstrap()
