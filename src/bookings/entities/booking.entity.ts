import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'bookings' })
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  room_id: number;

  @Column({ type: 'text' })
  guest_name: string;

  @Column({ type: 'timestamptz', nullable: true })
  checkin: Date;

  @Column({ type: 'timestamptz', nullable: true })
  checkout: Date;
}
