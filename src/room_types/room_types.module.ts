import { Module } from '@nestjs/common';
import { RoomTypesService } from './room_types.service';
import { RoomTypesController } from './room_types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomType } from './entities/room_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoomType])],
  controllers: [RoomTypesController],
  providers: [RoomTypesService],
})
export class RoomTypesModule {}
