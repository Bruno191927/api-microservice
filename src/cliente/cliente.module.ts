import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CLIENTE_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'cliente',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'cliente-consumer' + Math.random(),
          },
        },
      },
    ]),
  ],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClienteModule {}
