import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boareds: any[] = [];

  getAllBoards(): any[] {
    return this.boareds;
  }
}
