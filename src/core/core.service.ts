import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { UserSettingService } from 'src/user-setting/user-setting.service';
import { User } from 'src/user/user.entity';

@Injectable()
export class CoreService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private userService: UserService,

    @Inject(forwardRef(() => UserSettingService))
    private userSettingService: UserSettingService
  ) {}

  async try(): Promise<User[]> {
    return await this.userService.findAll();
  }
}