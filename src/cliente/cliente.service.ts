import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ClientKafka } from '@nestjs/microservices';
import { timeout } from 'rxjs';

@Injectable()
export class ClienteService implements OnModuleInit {
  constructor(
    @Inject('CLIENTE_SERVICE') private readonly clienteClient: ClientKafka,
  ) {}

  async create(createClienteDto: CreateClienteDto) {
    return this.clienteClient
      .send('createCliente', createClienteDto)
      .pipe(timeout(4000));
  }

  findAll() {
    return `This action returns all cliente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cliente`;
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }

  async onModuleInit() {
    this.clienteClient.subscribeToResponseOf('createCliente');
    await this.clienteClient.connect();
  }
}
