import { UserSetting } from './user-setting.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';

@Injectable()
export class UserSettingService {
  constructor(
    @InjectRepository(UserSetting)
    private userSettingRepository: Repository<UserSetting>,
  ) {}

  async findByUser(user: User): Promise<UserSetting[]> {
    const userSettings = await this.userSettingRepository.find({user});
    return userSettings;
  }

  async findAutoloadForUser(user: User): Promise<UserSetting[]> {
    const userSettings = await this.userSettingRepository.find({user, autoload: true});
    return userSettings;
  }

  async put(user: User, key: string, value: any, autoload = false): Promise<void> {
    if (await this.userSettingRepository.count({user, key}) > 0) {
      await this.userSettingRepository.update({user, key}, {value, autoload});
    } else {
      await this.userSettingRepository.insert({user, key, value, autoload});
    }
  }

  async get(user: User, key: string): Promise<string> {
    const userSetting = await this.userSettingRepository.findOne({user, key});
    return userSetting ? userSetting.value : null;
  }
}