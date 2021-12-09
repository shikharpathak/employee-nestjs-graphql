import { Field, InputType } from '@nestjs/graphql';
import { Entity } from 'typeorm';

@InputType()
@Entity()
export class EmployeeCreateDTO {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  designation: string;

  @Field({ nullable: true })
  city: string;
}
