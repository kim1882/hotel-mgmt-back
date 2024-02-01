import { Injectable } from '@nestjs/common';
import { CreateRoomTypeDto } from './dto/create-room_type.dto';
import { UpdateRoomTypeDto } from './dto/update-room_type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomType } from './entities/room_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomTypesService {
  constructor(
    @InjectRepository(RoomType)
    private readonly roomTypeRepository: Repository<RoomType>,
  ) {}

  create(createRoomTypeDto: CreateRoomTypeDto) {
    const roomType: RoomType = new RoomType();
    roomType.name = createRoomTypeDto.name;
    roomType.price = createRoomTypeDto.price;
    return this.roomTypeRepository.save(roomType);
  }

  findAll() {
    return this.roomTypeRepository.find();
  }

  findOne(id: number) {
    return this.roomTypeRepository.findOneBy({ id });
  }

  update(id: number, updateRoomTypeDto: UpdateRoomTypeDto) {
    const roomType: RoomType = new RoomType();
    roomType.name = updateRoomTypeDto.name;
    roomType.price = updateRoomTypeDto.price;
    roomType.id = id;
    return this.roomTypeRepository.save(roomType);
  }

  remove(id: number) {
    return this.roomTypeRepository.delete(id);
  }
}
