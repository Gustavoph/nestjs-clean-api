import { Module } from '@nestjs/common'

import { PrismaService } from './prisma/prisma.service'

import { UsersRepository } from '@/application/ports/user-repository'

import { PrismaUserRepository } from './prisma/repositories/prisma-user-repository'

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
