import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UserSettingModule } from './user-setting/user-setting.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    UserSettingModule,
    CoreModule,
  ]
})
export class AppModule {}
