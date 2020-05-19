import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CoreService } from './core.service';
import { ConnectorInterface } from './interfaces/connector.interface';
import { Button } from './interfaces/button.interface';
import { MEDIA_TYPE } from './constants';

type ConnectorRecord = Record<string, ConnectorInterface>;

@Injectable()
export class ConnectorService {
  connectorRepository: ConnectorRecord;

  constructor(
    @Inject(forwardRef(() => CoreService))
    private coreService: CoreService,
  ) {
    this.connectorRepository = {};
  }

  async registerConnector(connector: ConnectorInterface): Promise<void> {
    connector.connectorService = this;
    this.connectorRepository[connector.channel] = connector;
  }

  async getConnector(channel: string): Promise<ConnectorInterface> {
    return this.connectorRepository[channel];
  }

  async handleText(channel: string, id: string, text: string) {
    let connector = await this.getConnector(channel);
  }

  async handleButton(channel: string, id: string, button: Button) {
    let connector = await this.getConnector(channel);
  }

  async handleMedia(channel: string, id: string, type: MEDIA_TYPE, url: string) {
    let connector = await this.getConnector(channel);
  }
}