import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsModule } from './rooms/rooms.module';
import { Room } from './rooms/entities/room.entity';
import { RoomTypesModule } from './room_types/room_types.module';
import { RoomType } from './room_types/entities/room_type.entity';
import { BookingsModule } from './bookings/bookings.module';
import { Booking } from './bookings/entities/booking.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development.local',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('POSTGRES_HOST'),
        port: 5432,
        password: configService.get<string>('POSTGRES_PASSWORD'),
        username: configService.get<string>('POSTGRES_USER'),
        entities: [Room, RoomType, Booking],
        database: configService.get<string>('POSTGRES_DATABASE'),
        synchronize: true,
        logging: true,
        ssl: true,
        extra: {
          ssl: {
            rejectUnauthorized: false,
          },
        },
      }),
    }),
    RoomsModule,
    RoomTypesModule,
    BookingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
