import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardRepository } from './repository/board.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsController } from './boards.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BoardRepository])],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
