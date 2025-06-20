import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGradoDto } from './dto/create-grado.dto';
import { UpdateGradoDto } from './dto/update-grado.dto';
import { Grado } from './entities/grado.entity';

@Injectable()
export class GradoService {
  constructor(
    @InjectRepository(Grado)
    private gradoRepository: Repository<Grado>,
  ) {}

  create(createGradoDto: CreateGradoDto) {
    const grado = this.gradoRepository.create(createGradoDto);
    return this.gradoRepository.save(grado);
  }

  findAll() {
    return this.gradoRepository.find();
  }

  findOne(id: number) {
    return this.gradoRepository.findOneBy({ idGrado: id });
  }

  update(id: number, updateGradoDto: UpdateGradoDto) {
    return this.gradoRepository.update(id, updateGradoDto);
  }

  remove(id: number) {
    return this.gradoRepository.delete(id);
  }
}