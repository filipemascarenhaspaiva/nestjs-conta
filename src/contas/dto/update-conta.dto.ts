import { IsNotEmpty} from 'class-validator';

export class  UpdateContaDto{
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  CPF: string;

  @IsNotEmpty()
  endereco: string;
}
