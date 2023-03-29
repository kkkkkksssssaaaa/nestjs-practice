import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Board, BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(dto: CreateBoardDto) {
    const board: Board = {
      id: randomUUID(),
      title: dto.title,
      description: dto.description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);

    return board;
  }
}
