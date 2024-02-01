import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateRoomDto {
  @IsNotEmpty()
  @IsInt()
  room_type_id: number;
}
