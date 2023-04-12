import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './model/board-status.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './dto/board-status-validation.pipe';
import { Board } from './entity/board.entity';

// 컨트롤러 클래스임을 명시하는 데코레이터
@Controller('boards')
export class BoardsController {
  constructor(private service: BoardsService) {}

  @Get()
  getAllBoards(): Board[] {
    return this.service.getAllBoards();
  }

  @Get('/:id')
  getBoardById(@Param('id', ParseUUIDPipe) id: string): Board {
    return this.service.getBoardById(id);
  }

  // json object 를 받으려면... @Body() 를 사용하여 전달받음
  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() dto: CreateBoardDto): Board {
    return this.service.createBoard(dto);
  }

  @Delete('/:id')
  deleteBoard(@Param('id', ParseUUIDPipe) id: string): void {
    this.service.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id', ParseUUIDPipe) id: string,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ) {
    return this.service.updateBoardStatus(id, status);
  }
}
