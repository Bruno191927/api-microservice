import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente/cliente.module';
import { ConfigModule } from '@nestjs/config';
import { ReclamoModule } from './reclamo/reclamo.module';
import { EventosModule } from './eventos/eventos.module';
import { WebsocketModule } from './websocket/websocket.module';

@Module({
  imports: [ConfigModule.forRoot(), ClienteModule, ReclamoModule, EventosModule, WebsocketModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
