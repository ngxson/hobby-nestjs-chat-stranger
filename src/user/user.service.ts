import { User } from './user.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(channel: string, id: string): Promise<User> {
    const user = await this.userRepository.findOne({channel, scopedId: id});
    return user;
  }
  
  async setUserData(channel: string, id: string, data: any): Promise<void> {
    let user = await this.findOne(channel, id);
    if (user) {
      user = Object.assign(user, data);
    } else {
      user = new User();
      user = Object.assign(user, data);
      user.channel = channel;
      user.scopedId = id;
    }
    await this.userRepository.save(user);
  }
}