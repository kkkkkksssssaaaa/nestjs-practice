import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Board, BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private readonly defaultBoard: Board = {
    id: '7b46b1a0-6dd6-4e8b-8f7d-cfc1f2eb1050',
    title: 'title',
    description: 'description',
    status: BoardStatus.PUBLIC,
  };
  private boards: Board[] = [this.defaultBoard];

  getAllBoards(): Board[] {
    return this.boards;
  }

  getBoardById(id: string): Board {
    return this.boards.find((board) => board.id === id);
  }

  createBoard(dto: CreateBoardDto) {
    const { title, description } = dto;

    console.log(title, description);

    const board: Board = {
      id: randomUUID(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);

    return board;
  }

  deleteBoard(id: string): void {
    this.boards = this.boards.filter((board) => board.id !== id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    console.log(status);
    const board: Board = this.getBoardById(id);
    board.status = status;

    return board;
  }
}
