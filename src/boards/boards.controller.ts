import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './model/board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './dto/board-status-validation.pipe';
import { Board } from './entity/board.entity';
import { AuthGuard } from '@nestjs/passport';
import { Getuser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/entity/user.entity';

@UseGuards(AuthGuard())
// 컨트롤러 클래스임을 명시하는 데코레이터
@Controller('boards')
export class BoardsController {
  constructor(private service: BoardsService) {}

  @Get()
  getAllBoards(@Getuser() user: User): Promise<Board[]> {
    return this.service.getAllBoards(user);
  }

  @Get('/:id')
  getBoardById(@Param('id', ParseIntPipe) id: number): Promise<Board> {
    return this.service.getBoardById(id);
  }

  // json object 를 받으려면... @Body() 를 사용하여 전달받음
  @Post()
  @UsePipes(ValidationPipe)
  createBoard(
    @Body() dto: CreateBoardDto,
    @Getuser() user: User,
  ): Promise<Board> {
    return this.service.createBoard(dto, user);
  }

  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id: number): void {
    this.service.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ): Promise<Board> {
    return this.service.updateBoardStatus(id, status);
  }
}
