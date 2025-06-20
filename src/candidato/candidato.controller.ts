import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CandidatoService } from './candidato.service';
import { CreateCandidatoDto } from './dto/create-candidato.dto';
import { UpdateCandidatoDto } from './dto/update-candidato.dto';

@Controller('candidato')
export class CandidatoController {
  constructor(private readonly candidatoService: CandidatoService) {}

  @Post()
  create(@Body() createCandidatoDto: CreateCandidatoDto) {
    return this.candidatoService.create(createCandidatoDto);
  }

  @Get()
  findAll() {
    return this.candidatoService.findAll();
  }

  @Get(':id')
findOne(@Param('id') id: number) {
  return this.candidatoService.findOne(Number(id));
}

@Put(':id')
update(@Param('id') id: number, @Body() updateCandidatoDto: UpdateCandidatoDto) {
  return this.candidatoService.update(Number(id), updateCandidatoDto);
}

@Delete(':id')
remove(@Param('id') id: number) {
  return this.candidatoService.remove(Number(id));
}
}