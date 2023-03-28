import { Injectable } from '@nestjs/common';
import { Board } from '../../dist/boards/board.model';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }
}
