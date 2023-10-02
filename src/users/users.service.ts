import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Roles } from './entities/role.entity';
import { Users } from './entities/users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users) private userRepository: Repository<Users>,
        @InjectRepository(Roles) private roleRepository: Repository<Roles>,
    ){}

    createRoles(createRole: any){
        return this.roleRepository.create({
            role_name: createRole.role_name,
            description: createRole.description,
        })
    }
    findUsers(){
        return this.userRepository.find();
    }

    findOne(id: any){
        return this.userRepository.findOne(id);
    }
}
