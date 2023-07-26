import { Injectable } from '@nestjs/common'
import { type UsersRepository } from '@/application/ports/user-repository'
import { type AsyncMaybe } from '@/core/logic/maybe'
import { type User } from '@/domain/entities/user'
import { PrismaService } from '../prisma.service'
import { UserMapper } from '../mappers/user.mapper'

@Injectable()
export class PrismaUserRepository implements UsersRepository {
  constructor (private readonly prisma: PrismaService) {}

  async create (user: User): Promise<User> {
    await this.prisma.user.create({
      data: UserMapper.toPersistence(user)
    })
    return user
  }

  async findByEmail (email: string): AsyncMaybe<User> {
    const user = await this.prisma.user.findUnique({
      where: { email }
    })
    if (!user) { return null }
    return UserMapper.toDomain(user)
  }
}
