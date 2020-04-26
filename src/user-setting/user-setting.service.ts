import { UserSetting } from './user-setting.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserSettingService {
  constructor(
    @InjectRepository(UserSetting)
    private userSettingRepository: Repository<UserSetting>,
  ) {}

  async findAll(): Promise<UserSetting[]> {
    return await this.userSettingRepository.find();
  }

  async findOne(channel: string, id: string): Promise<UserSetting> {
    const user = await this.userSettingRepository.findOne({channel, id});
    return user;
  }
}