import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { UserSettingService } from 'src/user-setting/user-setting.service';
import { User } from 'src/user/user.entity';
import { RoomService } from 'src/room/room.service';
import { USER_STATUS } from './constants';

@Injectable()
export class CoreService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private userService: UserService,

    @Inject(forwardRef(() => UserSettingService))
    private userSettingService: UserSettingService,

    @Inject(forwardRef(() => RoomService))
    private roomService: RoomService,
  ) {}

  async getUserStatus(channel: string, id: string): Promise<string> {
    let user = await this.userService.findOne(channel, id);
    return user.status || USER_STATUS.NONE;
  }

  async getUserInfo(channel: string, id: string): Promise<User> {
    let user = await this.userService.findOne(channel, id);
    return user;
  }
}