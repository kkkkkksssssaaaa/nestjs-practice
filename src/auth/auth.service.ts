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
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly repository: UserRepository,
  ) {}

  async signUp(dto: AuthCredentialsDto): Promise<User> {
    const hashedPassword: string = await bcrypt.hash(
      dto.password,
      await bcrypt.genSalt(),
    );

    const user: User = this.repository.create({
      name: dto.name,
      password: hashedPassword,
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
