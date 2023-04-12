import { Repository } from 'typeorm';
import { Board } from '../entity/board.entity';
import { CreateBoardDto } from '../dto/create-board.dto';
import { BoardStatus } from '../model/board-status.enum';

export class BoardRepository extends Repository<Board> {
  async createBoard(dto: CreateBoardDto): Promise<Board> {
    const board: Board = this.create({
      title: dto.title,
      description: dto.description,
      status: BoardStatus.PUBLIC,
    });

    await this.save(board);

    return board;
  }
}
