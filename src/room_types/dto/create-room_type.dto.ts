import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRoomTypeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
