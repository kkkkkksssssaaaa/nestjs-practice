import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './model/board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './entity/board.entity';
import { BoardRepository } from './repository/board.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private readonly repository: BoardRepository,
  ) {}

  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  getBoardById(id: string): Board {
    const found: Board = this.boards.find((board) => board.id === id);

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }

    return found;
  }

  createBoard(dto: CreateBoardDto) {
    const board: Board = {
      title: dto.title,
      description: dto.description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);

    return board;
  }

  deleteBoard(id: string): void {
    const found: Board = this.getBoardById(id);
    this.boards = this.boards.filter((board) => board.id !== found.id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board: Board = this.getBoardById(id);
    board.status = status;

    return board;
  }
}
