import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn,  } from 'typeorm';
import { Users } from './users.entity'
export enum UserRole {
    PETUGAS_TOKO = 'petugas_toko',
    SUPLIER = 'suplier',
    CUSTOMER = 'customer'
}

@Entity()
@ObjectType()
export class Roles{
    @PrimaryGeneratedColumn()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Field(type => Int)
    id: number;

    @Column({
        type: 'enum',
        enum: UserRole
    })
    @Field()
    role_name: UserRole;

    @Column()
    @Field()
    description: string;

    @ManyToOne(() => Users, user => user.role)
    users: Users[];

}