import { Controller, Get, Post, Body, Param, Put, Delete, BadRequestException } from '@nestjs/common';
import { VotacionService } from './votacion.service';
import { CreateVotacionDto } from './dto/create-votacion.dto';
import { UpdateVotacionDto } from './dto/update-votacion.dto';

@Controller('votacion')
export class VotacionController {
  constructor(private readonly votacionService: VotacionService) {}

  @Post()
  create(@Body() createVotacionDto: CreateVotacionDto) {
    return this.votacionService.create(createVotacionDto);
  }

  @Get()
  findAll() {
    return this.votacionService.findAll();
  }

  @Get('resultados')
  getResultados() {
    return this.votacionService.resultadosConGanador();
  }

  @Get('total')
  getTotalVotos() {
    return this.votacionService.totalVotos();
}

  @Get(':id')
findOne(@Param('id') id: string) {
  const idNum = Number(id);
  if (isNaN(idNum)) {
    throw new BadRequestException('El id debe ser un número');
  }
  return this.votacionService.findOne(idNum);
}

  @Put(':id')
update(@Param('id') id: string, @Body() updateDto: UpdateVotacionDto) {
  const idNum = Number(id);
  if (isNaN(idNum)) {
    throw new BadRequestException('El id debe ser un número');
  }
  return this.votacionService.update(idNum, updateDto);
}

@Delete(':id')
remove(@Param('id') id: string) {
  const idNum = Number(id);
  if (isNaN(idNum)) {
    throw new BadRequestException('El id debe ser un número');
  }
  return this.votacionService.remove(idNum);
}

  
}