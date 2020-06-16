import {
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  Body,
  Req,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { CurrentUser } from 'src/common/decorators/user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async login(@Req() req): Promise<any> {
    return await this.authService.login(req.user);
  }

  @ApiOperation({ summary: '注册' })
  @Post('register')
  async register(@Body() dto: RegisterDto): Promise<any> {
    return await this.authService.register(dto);
  }

  // 在需要的地方使用守卫，可保证必须携带token才能访问
  @ApiOperation({ summary: '用户信息' })
  @UseGuards(AuthGuard('jwt'))
  @Get('user')
  @ApiBearerAuth()
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async user(@Request() req):Promise<any> {
    
    return req.user;
  }
}
