import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './model/board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './entity/board.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';
import { BoardRepository } from './repository/board.repository';
import { User } from 'src/auth/entity/user.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private readonly repository: BoardRepository,
  ) {}

  async getAllBoards(): Promise<Board[]> {
    return await this.repository.find();
  }

  async getBoardById(id: number): Promise<Board> {
    const found: Board = await this.repository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }

    return found;
  }

  async createBoard(dto: CreateBoardDto, user: User): Promise<Board> {
    const board: Board = this.repository.create({
      title: dto.title,
      description: dto.description,
      status: BoardStatus.PUBLIC,
      user: user,
    });

    return this.repository.save(board);
  }

  async deleteBoard(id: number): Promise<void> {
    const result: DeleteResult = await this.repository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }

    console.log('result', result);
  }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board: Board = await this.getBoardById(id);

    board.status = status;
    await this.repository.save(board);

    return board;
  }
}
