import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { BoardStatus } from '../board.model';

@Injectable()
export class BoardStatusValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    this.logging(value, metadata);
    return this.parseStringToStatus(value);
  }

  private logging(value: string, metadata: ArgumentMetadata): void {
    console.log(`\nvalue is ${value}`);
    console.log(`metadata ${metadata}`);
    console.log(`metadata.type ${metadata.type}`);
    console.log(`metadata.data ${metadata.data}`);
    console.log(`metadata.metatype ${metadata.metatype}`);
  }

  private parseStringToStatus(value: string): BoardStatus {
    if (value.toUpperCase() === BoardStatus.PUBLIC) {
      return BoardStatus.PUBLIC;
    }

    if (value.toUpperCase() === BoardStatus.PRIVATE) {
      return BoardStatus.PRIVATE;
    }

    throw new BadRequestException();
  }
}
