import { IsNotEmpty} from 'class-validator';

export class CreateContaDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  saldo: number;

  @IsNotEmpty()
  CPF: string;

  @IsNotEmpty()
  endereco: string;
}
