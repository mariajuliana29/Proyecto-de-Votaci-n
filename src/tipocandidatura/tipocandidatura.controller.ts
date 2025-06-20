import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipocandidaturaService } from './tipocandidatura.service';
import { CreateTipocandidaturaDto } from './dto/create-tipocandidatura.dto';
import { UpdateTipocandidaturaDto } from './dto/update-tipocandidatura.dto';

@Controller('tipocandidatura')
export class TipocandidaturaController {
  constructor(private readonly tipocandidaturaService: TipocandidaturaService) {}

  @Post()
  create(@Body() createTipocandidaturaDto: CreateTipocandidaturaDto) {
    return this.tipocandidaturaService.create(createTipocandidaturaDto);
  }

  @Get()
  findAll() {
    return this.tipocandidaturaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipocandidaturaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipocandidaturaDto: UpdateTipocandidaturaDto) {
    return this.tipocandidaturaService.update(+id, updateTipocandidaturaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipocandidaturaService.remove(+id);
  }
}
