import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'kkkkkksssssaaaa',
  password: '1234',
  database: 'board_app',
  // import 할 entity file 정의
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
