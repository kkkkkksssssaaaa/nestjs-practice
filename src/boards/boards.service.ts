import { Injectable } from '@nestjs/common';
import { Board } from '../../dist/boards/board.model';

@Injectable()
export class BoardsService {
  private boareds: Board[] = [];

  getAllBoards(): Board[] {
    return this.boareds;
  }
}
