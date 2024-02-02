import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateBookingDto {
  @IsNotEmpty()
  @IsInt()
  room_id: number;

  @IsNotEmpty()
  @IsString()
  guest_name: string;

  @IsOptional()
  @IsDate()
  checkin: Date | null;

  @IsOptional()
  @IsDate()
  checkout: Date | null;
}
