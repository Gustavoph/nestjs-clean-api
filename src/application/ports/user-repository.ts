import { Injectable } from '@nestjs/common'

import { type AsyncMaybe } from '@/core/logic/maybe'
import { type User } from '@/domain/entities/user'

@Injectable()
export abstract class UsersRepository {
  abstract create (user: User): Promise<User>
  abstract findByEmail (email: string): AsyncMaybe<User>
}
