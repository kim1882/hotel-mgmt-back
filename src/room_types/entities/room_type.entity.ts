import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'room_types' })
export class RoomType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  price: number;
}
