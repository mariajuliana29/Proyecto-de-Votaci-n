import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Votacion } from './entities/votacion.entity';
import { CreateVotacionDto } from './dto/create-votacion.dto';
import { UpdateVotacionDto } from './dto/update-votacion.dto';

@Injectable()
export class VotacionService {
  constructor(
    @InjectRepository(Votacion)
    private votacionRepository: Repository<Votacion>,
  ) {}

  create(createVotacionDto: CreateVotacionDto) {
  const votacion = this.votacionRepository.create({
    usuario: { idUsuario: createVotacionDto.idUsuario },
    candidato: { idCandidato: createVotacionDto.idCandidato }
  });
  return this.votacionRepository.save(votacion);
}

  findAll() {
    return this.votacionRepository.find({ relations: ['usuario', 'candidato'] });
  }

  findOne(id: number) {
    return this.votacionRepository.findOne({
      where: { idVotacion: id },
      relations: ['usuario', 'candidato'],
    });
  }

  update(id: number, updateVotacionDto: UpdateVotacionDto) {
    return this.votacionRepository.update(id, updateVotacionDto);
  }

  remove(id: number) {
    return this.votacionRepository.delete(id);
  }
  // Total de votos por candidato
async resultadosConGanador() {
  const resultados = await this.votacionRepository
    .createQueryBuilder('votacion')
    .select('votacion.idCandidato', 'idCandidato')
    .addSelect('COUNT(*)', 'totalVotos')
    .groupBy('votacion.idCandidato')
    .orderBy('totalVotos', 'DESC')
    .getRawMany();

  const ganador = resultados.length > 0 ? resultados[0] : null;

  return {
    resultados,
    ganador
  };
}

// Total general de votos
async totalVotos() {
  return this.votacionRepository
    .createQueryBuilder('votacion')
    .select('COUNT(*)', 'totalVotos')
    .getRawOne();
}
}