import { Module } from '@nestjs/common';
import { ReclamoService } from './reclamo.service';
import { ReclamoController } from './reclamo.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'RECLAMO_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'reclamo',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'reclamo-consumer' + Math.random(),
          },
        },
      },
    ]),
  ],
  controllers: [ReclamoController],
  providers: [ReclamoService],
})
export class ReclamoModule {}
