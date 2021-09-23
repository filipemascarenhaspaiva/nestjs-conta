import { Injectable } from '@nestjs/common';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';

export type Conta = {
  nome: string;
  saldo: number;
  CPF: string;
  endereo: string;
};

const contas: Conta[] = [];

@Injectable()
export class ContasService {
  contaModel: any;
  getAll() {
    return contas;
  }

  createConta(conta: CreateContaDto) {
    return contas.push(conta);
  }

  findOne(id: string) {
    return this.contaModel.findById(id);
  }

  update(id: string, updateContaDto: UpdateContaDto) {
    return this.contaModel.findByIdAndupdate(
      {
        _id: id,
      },
      {
        updateContaDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.contaModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
  

}

