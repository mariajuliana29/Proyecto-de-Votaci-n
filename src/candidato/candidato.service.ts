import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidato } from './entities/candidato.entity';
import { CreateCandidatoDto } from './dto/create-candidato.dto';
import { UpdateCandidatoDto } from './dto/update-candidato.dto';

@Injectable()
export class CandidatoService {
  constructor(
    @InjectRepository(Candidato)
    private candidatoRepository: Repository<Candidato>,
  ) {}

  create(createCandidatoDto: CreateCandidatoDto) {
  const candidato = this.candidatoRepository.create({
    numeroTarjeton: createCandidatoDto.numeroTarjeton,
    usuario: { idUsuario: createCandidatoDto.idUsuario },
    tipocandidatura: { id: createCandidatoDto.idTipocandidatura }
  });
  return this.candidatoRepository.save(candidato);
}

  findAll() {
    return this.candidatoRepository.find({ relations: ['usuario', 'tipocandidatura'] });
  }

  findOne(id: number) {
  return this.candidatoRepository.findOne({
    where: { idCandidato: id },
    relations: ['usuario'],
  });
}

update(id: number, updateCandidatoDto: UpdateCandidatoDto) {
  return this.candidatoRepository.update(id, updateCandidatoDto);
}

remove(id: number) {
  return this.candidatoRepository.delete(id);
}
}