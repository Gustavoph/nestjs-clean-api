import { Module } from '@nestjs/common'

import { PrismaService } from '../database/prisma/prisma.service'
import { UsersRepository } from '@/application/contracts/user-repository'
import { PrismaUserRepository } from '../database/prisma/repositories/prisma-user-repository'

@Module({
  providers: [
    PrismaService,
    {
      provide: UsersRepository,
      useClass: PrismaUserRepository
    }
  ],
  exports: [PrismaService, UsersRepository]
})
export class DatabaseModule {}
