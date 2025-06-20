import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTipocandidaturaDto } from './dto/create-tipocandidatura.dto';
import { UpdateTipocandidaturaDto } from './dto/update-tipocandidatura.dto';
import { Tipocandidatura } from './entities/tipocandidatura.entity';

@Injectable()
export class TipocandidaturaService {
  constructor(
    @InjectRepository(Tipocandidatura)
    private tipocandidaturaRepository: Repository<Tipocandidatura>,
  ) {}

  create(createTipocandidaturaDto: CreateTipocandidaturaDto) {
    const tipocandidatura = this.tipocandidaturaRepository.create(createTipocandidaturaDto);
    return this.tipocandidaturaRepository.save(tipocandidatura);
  }

  findAll() {
    return this.tipocandidaturaRepository.find();
  }

  findOne(id: number) {
    return this.tipocandidaturaRepository.findOneBy({ id });
  }

  update(id: number, updateTipocandidaturaDto: UpdateTipocandidaturaDto) {
    return this.tipocandidaturaRepository.update(id, updateTipocandidaturaDto);
  }

  remove(id: number) {
    return this.tipocandidaturaRepository.delete(id);
  }
}