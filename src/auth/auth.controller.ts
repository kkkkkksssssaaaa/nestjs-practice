import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('/signup')
  async signUp(@Body(ValidationPipe) dto: AuthCredentialsDto): Promise<void> {
    await this.service.signUp(dto);
  }

  @Post('/signin')
  async signIn(@Body(ValidationPipe) dto: AuthCredentialsDto): Promise<{
    accessToken: string;
  }> {
    return await this.service.signIn(dto);
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  test(@Req() req) {
    console.log('req', req);
  }
}
