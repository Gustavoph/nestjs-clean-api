import { User } from '@/domain/entities/user.entity'
import { type Prisma, type User as RawUser } from '@prisma/client'

export class UserMapper {
  static toDomain (raw: RawUser): User {
    const user = User.create({
      email: raw.email,
      name: raw.name,
      createdAt: raw.created_at
    })

    return user
  }

  static toPersistence (user: User): Prisma.UserCreateInput {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.createdAt
    }
  }
}
