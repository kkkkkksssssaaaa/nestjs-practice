import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {

  @Post()
  @HttpCode(204)
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
