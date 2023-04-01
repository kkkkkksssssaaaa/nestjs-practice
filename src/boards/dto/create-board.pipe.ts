import { ArgumentMetadata, PipeTransform, Injectable } from '@nestjs/common';
import { CreateBoardDto } from './create-board.dto';

@Injectable()
export class CreateBoardPipe implements PipeTransform {
  transform(value: CreateBoardDto, metadata: ArgumentMetadata): CreateBoardDto {
    return new CreateBoardDto();
  }
}
