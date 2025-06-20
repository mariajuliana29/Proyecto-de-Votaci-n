import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity';
import { Repository } from 'typeorm';
import { Grado } from 'src/grado/entities/grado.entity';


@Injectable()
export class CursoService {
   constructor(
      
       @InjectRepository(Curso)
       private cursoRepository: Repository<Curso>,
        @InjectRepository(Grado)
       private gradoRepository: Repository<Grado>,
     ) {}


    async create(createCursoDto: CreateCursoDto) {

       const grado = await this.gradoRepository.findOne({
         where: { idGrado: createCursoDto.gradoId }
        });

      if (!grado) {
       throw new NotFoundException(`Grado con ID ${createCursoDto.gradoId} no encontrado`);
     }


    const curso = this.cursoRepository.create({
      nomenclatura: createCursoDto.nomenclatura,
      grado : grado
      
    });

    return await this.cursoRepository.save(curso);
  }



  findAll(): Promise<Curso[]> {
    return this.cursoRepository.find();
  }


     findOne(idCurso: number): Promise<Curso | null> {
      return this.cursoRepository.findOneBy({ idCurso });
    }
   


  update(id: number, updateCursoDto: UpdateCursoDto) {
    return `This action updates a #${id} curso`;
  }

  remove(id: number) {
    return `This action removes a #${id} curso`;
  }
}
