import { Controller, Post, Response, Body, HttpStatus } from '@nestjs/common';
import { UserSetting } from './user-setting.entity';
import { UserSettingService } from './user-setting.service';

@Controller('user-settings')
export class UserSettingController {

  constructor (private userService: UserSettingService) {
  }

}