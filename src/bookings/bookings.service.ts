import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>,
  ) {}

  create(createBookingDto: CreateBookingDto) {
    const booking: Booking = new Booking();
    booking.room_id = createBookingDto.room_id;
    booking.guest_name = createBookingDto.guest_name;
    return this.bookingRepository.save(booking);
  }

  findAll() {
    return this.bookingRepository.find();
  }

  findOne(id: number) {
    return this.bookingRepository.findOneBy({ id });
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    const booking: Booking = new Booking();
    booking.room_id = updateBookingDto.room_id;
    booking.guest_name = updateBookingDto.guest_name;
    booking.checkin = updateBookingDto.checkin;
    booking.checkout = updateBookingDto.checkout;
    booking.id = id;
    return this.bookingRepository.save(booking);
  }

  remove(id: number) {
    return this.bookingRepository.delete(id);
  }
}
