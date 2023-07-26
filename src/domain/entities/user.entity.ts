import { AggregateRoot } from '@/core/domain/aggregate-root'
import { type Replace } from '@/core/logic/replace'
import { type Address } from './address.entity'

export interface UserProps {
  name: string
  email: string
  address: Address
  createdAt: Date
}

export class User extends AggregateRoot<UserProps> {
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
