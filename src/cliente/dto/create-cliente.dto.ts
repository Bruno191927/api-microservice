import { IsString } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
}
