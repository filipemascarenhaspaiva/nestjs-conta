import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateContaDto } from './dto/create-conta.dto';
import { ContasService, Conta } from './contas.service';
import { UpdateContaDto } from './dto/update-conta.dto';

@Controller('contas')
export class ContasController {
  constructor(private contasService: ContasService) {}

  @Get("/visualizar")
  index(): Conta[] {
    return this.contasService.getAll();
  }

  @Post("/criarconta")
  create(@Body() createConta: CreateContaDto) {
    this.contasService.createConta(createConta);
  }

  @Get('/verificarconta:id')
  findOne(@Param('id') id: string) {
    return this.contasService.findOne(id);
  }

  @Patch('/alterarconta:id')
  update(@Param('id') id: string, @Body() updateContaDto: UpdateContaDto) {
    return this.contasService.update(id, updateContaDto);
  }

  @Delete('/deletarconta:id')
  remove(@Param('id') id: string) {
    return this.contasService.remove(id);
  }
}


