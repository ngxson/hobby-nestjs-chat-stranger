import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomController } from './room.controller';
import { Room } from './room.entity';
import { RoomService } from './room.service';

@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  providers: [RoomService],
  controllers: [RoomController],
  exports: [RoomService]
})

export class RoomModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}
