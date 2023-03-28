import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

// 컨트롤러 클래스임을 명시하는 데코레이터
@Controller('boards')
export class BoardsController {
  constructor(private service: BoardsService) {}

  @Get()
  getAllBoards(): any[] {
    return this.service.getAllBoards();
  }
}
