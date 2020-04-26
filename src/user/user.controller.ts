import { Controller, Post, Response, Body, HttpStatus } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

  constructor (private userService: UserService) {
  }

}