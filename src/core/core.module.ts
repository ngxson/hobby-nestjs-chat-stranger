import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserSettingModule } from '../user-setting/user-setting.module'
import { UserModule } from 'src/user/user.module';
import { WebhookController } from './webhook.controller';
import { CoreService } from './core.service';

@Module({
  imports: [UserModule, UserSettingModule],
  providers: [CoreService],
  controllers: [WebhookController],
  exports: [CoreService]
})

export class CoreModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}
