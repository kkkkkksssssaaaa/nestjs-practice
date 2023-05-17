import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Getuser } from './get-user.decorator';
import { User } from './entity/user.entity';

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
  // Guard 를 선언해야 Custom Parameter Decorator 를 사용할 수 있나보다..
  @UseGuards(AuthGuard())
  test(@Getuser() user: User) {
    console.log(user);
  }
}
