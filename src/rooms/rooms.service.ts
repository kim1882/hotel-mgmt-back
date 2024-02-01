import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room) private readonly roomRepository: Repository<Room>,
  ) {}

  create(createRoomDto: CreateRoomDto) {
    const room: Room = new Room();
    room.room_type_id = createRoomDto.room_type_id;
    return this.roomRepository.save(room);
  }

  findAll() {
    return this.roomRepository.find();
  }

  findOne(id: number) {
    return this.roomRepository.findOneBy({ id });
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    const room: Room = new Room();
    room.room_type_id = updateRoomDto.room_type_id;
    room.id = id;
    return this.roomRepository.save(room);
  }

  remove(id: number) {
    return this.roomRepository.delete(id);
  }
}
