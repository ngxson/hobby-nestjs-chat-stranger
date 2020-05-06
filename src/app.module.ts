import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UserSettingModule } from './user-setting/user-setting.module';
import { RoomModule } from './room/room.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    UserSettingModule,
    RoomModule,
    CoreModule,
  ]
})
export class AppModule {}
