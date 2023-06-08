import { IsString } from 'class-validator';

export class CreateReclamoDto {
  @IsString()
  tipo: string;
  @IsString()
  descripcion: string;
}
