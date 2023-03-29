import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';

// 컨트롤러 클래스임을 명시하는 데코레이터
@Controller('boards')
export class BoardsController {
  constructor(private service: BoardsService) {}

  @Get()
  getAllBoards(): Board[] {
    return this.service.getAllBoards();
  }

  // json object 를 받으려면... @Body() 를 사용하여 전달받음
  @Post()
  createBoard(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Board {
    return this.service.createBoard(title, description);
  }
}
