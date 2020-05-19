import { User } from '../../user/user.entity';
import { ConnectorResponse } from './response.interface';
import { MEDIA_TYPE } from '../constants';
import { Button } from './button.interface';
import { ConnectorService } from '../connector.service';

export interface ConnectorInterface {
  channel: string;
  config: any;
  connectorService?: ConnectorService;
  getUserInfo(scopedId: string): Promise<User>;
  sendTextMessage(scopedId: string, text: string): Promise<ConnectorResponse>;
  sendMediaMessage(scopedId: string, type: MEDIA_TYPE, url: string): Promise<ConnectorResponse>;
  sendButtonMessage(scopedId: string, buttons: [Button]): Promise<ConnectorResponse>;
}

