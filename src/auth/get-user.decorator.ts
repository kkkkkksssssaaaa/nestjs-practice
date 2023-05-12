import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { User } from './entity/user.entity';

export const Getuser = createParamDecorator(
  (data, ctx: ExecutionContext): User => {
    return ctx.switchToHttp().getRequest().user;
  },
);
