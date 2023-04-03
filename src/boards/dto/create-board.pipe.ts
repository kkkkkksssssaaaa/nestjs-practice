import { ArgumentMetadata, PipeTransform, Injectable } from '@nestjs/common';
import { CreateBoardDto } from './create-board.dto';

@Injectable()
export class CreateBoardPipe implements PipeTransform {
  transform(value: CreateBoardDto, metadata: ArgumentMetadata): CreateBoardDto {
    console.log(`value.title=${value.title}`);
    console.log(`value.description=${value.description}`);
    return value;
  }
}
