import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './room.entity';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
  ) {}

  async findAll(): Promise<Room[]> {
    return await this.roomRepository.find();
  }

  async getNew(): Promise<Room> {
    let room = new Room();
    room.created = new Date();
    return await this.roomRepository.save(room);
  }
}