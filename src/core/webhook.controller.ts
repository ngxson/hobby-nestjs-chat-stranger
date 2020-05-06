import { Controller, Get, Post, Response, Body, Query, HttpStatus } from '@nestjs/common';
import { CoreService } from './core.service';

@Controller('webhook')
export class WebhookController {

  constructor (private coreService: CoreService) {
  }

  @Get()
  get(@Query() query: any) {
    return this.coreService.try();
  }

  @Post()
  post(@Body() createCatDto: any) {
    return 'This action adds a new cat';
  }
}