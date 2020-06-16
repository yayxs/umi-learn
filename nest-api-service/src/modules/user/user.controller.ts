import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { Ires } from './interfaces/user.interface';

@Controller('user')
export class UserController {
    constructor(private readonly  userService:UserService ){

    }

    @Get()
    async findAll():Promise<Ires>{
        return this.userService.findAll()
    }
    // @Post()
    // async create(){
    //     return this.userService.c
    // }
}
