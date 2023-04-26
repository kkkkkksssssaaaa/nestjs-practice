import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { QueryFailedError } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly repository: UserRepository,
  ) {}

  async signUp(dto: AuthCredentialsDto): Promise<User> {
    const user: User = this.repository.create({
      name: dto.name,
      password: dto.password,
    });

    try {
      return await this.repository.save(user);
    } catch (e) {
      if (e instanceof QueryFailedError) {
        throw new ConflictException();
      }

      throw e;
    }
  }
}
