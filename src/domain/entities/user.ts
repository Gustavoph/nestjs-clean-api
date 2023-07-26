import { Entity } from '@/core/domain/entity'
import { type Replace } from '@/core/logic/replace'

export interface UserProps {
  name: string
  email: string
  createdAt: Date
}

export class User extends Entity<UserProps> {
  get email () {
    return this.props.email
  }

  get name () {
    return this.props.name
  }

  get createdAt () {
    return this.props.createdAt
  }

  static create (props: Replace<UserProps, { createdAt?: Date }>, id?: string) {
    const user = new User(
      {
        ...props,
        createdAt: props.createdAt ?? new Date()
      },
      id
    )

    return user
  }
}
