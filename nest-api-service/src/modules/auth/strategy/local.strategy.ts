import { Strategy, IStrategyOptions } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import {
  Injectable,
  HttpException,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { AuthService } from '../auth.service';
import { compareSync } from 'bcryptjs';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'username',
      passwordField: 'password',
    } as IStrategyOptions);
  }
  /**
   * 登录的时候走本地策略
   * @param username
   * @param password
   */
  async validate(username: string, pwd: string): Promise<any> {
    // 首先获取用户
    const user = await this.authService.validateUser(username);

    if (!user) {
      throw new BadRequestException('用户名不正确');
    }
    // 判断密码是否正确 通过jwt
    if (pwd!=user.password) {
      throw new BadRequestException('密码不正确');
    }
    return user;
  }
}
