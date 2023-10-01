import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Roles } from './role.entity'
@Entity()
@ObjectType()
export class Users{
    @PrimaryGeneratedColumn()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    email: string;

    @Column()
    @Field()
    password: string;

    @Column()
    @Field()
    birthOfDate: string;

    @CreateDateColumn()
    created_at: Date; 

    @UpdateDateColumn()
    updated_at: Date; 


}