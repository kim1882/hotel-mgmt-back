import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateBookingDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  room_id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  guest_name: string;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  checkin: Date | null;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  checkout: Date | null;
}
