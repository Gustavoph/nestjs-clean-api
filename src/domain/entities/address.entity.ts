import { Entity } from '@/core/domain/entity'
import { type Replace } from '@/core/logic/replace'

interface AddressProps {
  zip: string
  city: string
  state: string
  country: string
  street: string
  num: string
  createdAt: Date
}

export class Address extends Entity<AddressProps> {
  static create (props: Replace<AddressProps, { createdAt?: Date }>, id?: string) {
    const address = new Address(
      {
        ...props,
        createdAt: props.createdAt ?? new Date()
      },
      id
    )

    return address
  }
}
