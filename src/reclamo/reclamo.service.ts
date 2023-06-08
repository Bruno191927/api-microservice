import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { CreateReclamoDto } from './dto/create-reclamo.dto';
import { UpdateReclamoDto } from './dto/update-reclamo.dto';
import { ClientKafka } from '@nestjs/microservices';
import { timeout } from 'rxjs';

@Injectable()
export class ReclamoService implements OnModuleInit {
  constructor(
    @Inject('RECLAMO_SERVICE') private readonly reclamoClient: ClientKafka,
  ) {}

  create(createReclamoDto: CreateReclamoDto) {
    return this.reclamoClient
      .send('createReclamo', createReclamoDto)
      .pipe(timeout(4000));
  }

  findAll() {
    return `This action returns all reclamo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reclamo`;
  }

  update(id: number, updateReclamoDto: UpdateReclamoDto) {
    return `This action updates a #${id} reclamo`;
  }

  remove(id: number) {
    return `This action removes a #${id} reclamo`;
  }

  async onModuleInit() {
    this.reclamoClient.subscribeToResponseOf('createReclamo');
    await this.reclamoClient.connect();
  }
}
