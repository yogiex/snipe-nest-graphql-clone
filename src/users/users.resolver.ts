import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Users } from './entities/users.entity'
import { UsersService } from './users.service';


@Resolver(() => Users)
export class UsersResolver {
    constructor(
        private readonly userService: UsersService,
    ){}

    @Mutation()
    createRoles(@Args('createRoleInput') createRoleInput: any){
        return this.userService.createRoles(createRoleInput);
    }
    @Mutation(() => Users)
    createUser(){
        return "user has been created"
    }

    @Query(() => [Users], { name: 'owners'})
    findAll(){
        return "this all user"
    }

    @Query(() => Users, { })
    findOne(@Args('id', { type: () => Int }) id: number){
        return this.userService.findOne(id)
    }

    updateUser(){}

    deleteUser(){}
}
