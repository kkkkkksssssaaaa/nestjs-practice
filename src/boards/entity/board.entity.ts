import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from '../model/board-status.model';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;
}
