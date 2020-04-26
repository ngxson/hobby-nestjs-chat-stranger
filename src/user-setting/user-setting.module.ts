import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserSettingController } from './user-setting.controller';
import { UserSettingService } from './user-setting.service';
import { UserSetting } from './user-setting.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserSetting])],
  providers: [UserSettingService],
  controllers: [UserSettingController],
  exports: [UserSettingService]
})

export class UserSettingModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}
