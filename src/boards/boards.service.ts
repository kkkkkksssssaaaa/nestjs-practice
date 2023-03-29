import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from '../../dist/boards/board.model';
import { randomUUID } from 'crypto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(title: string, description: string) {
    const board: Board = {
      id: randomUUID(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);

    return board;
  }
}
