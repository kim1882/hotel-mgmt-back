import { IsDate, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateBookingDto {
  @IsNotEmpty()
  @IsInt()
  room_id: number;

  @IsNotEmpty()
  @IsString()
  guest_name: string;

  @IsNotEmpty()
  @IsDate()
  checkin: Date;

  @IsDate()
  checkout: Date;
}
