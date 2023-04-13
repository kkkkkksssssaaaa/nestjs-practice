import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './configs/typeorm.config';
import { AuthModule } from './auth/auth.module';

@Module({
  // 애플리케이션에서 사용될 모듈
  imports: [BoardsModule, TypeOrmModule.forRoot(typeORMConfig), AuthModule],
  // 모듈에서 사용할 컨트롤러 클래스 지정, Root 모듈에 해당 애플리케이션에서 사용될 컨트롤러 클래스를 모두 지정
  controllers: [],
  // 모듈에서 사용할 서비스 클래스 지정
  providers: [],
})
export class AppModule {}
