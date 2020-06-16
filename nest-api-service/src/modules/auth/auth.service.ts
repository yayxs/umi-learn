import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository, getRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import AuthEntity from './entity/auth.entity';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    // private readonly usersService: UsersService,
    @InjectRepository(AuthEntity)
    private authRepository: Repository<AuthEntity>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string): Promise<any> {
    const user = await this.authRepository.findOne({ username });
    return user;
  }

  async login(user: { username: any; id: any; } ): Promise<any> {
    const payload = {username: user.username, userId: user.id};
    const access_token = this.jwtService.sign(payload)
    return {
      access_token
    };
  }

  // 注册
  async register(dto:RegisterDto):Promise<any>{
    // 首先判断用户名是否存在
    const { username } = dto
    const u = await getRepository(AuthEntity).findOne({ where: { username } });
    if(u){
      throw new HttpException(
        {
          message: '你注册的用户名已经存在',
          error: '你注册的用户名已经存在.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.authRepository.save(dto)
  }

}
