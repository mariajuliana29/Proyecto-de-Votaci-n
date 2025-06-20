import { Module } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoController } from './curso.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity';
import { Grado } from 'src/grado/entities/grado.entity';
import { GradoModule } from 'src/grado/grado.module';

@Module({
   imports: [TypeOrmModule.forFeature([Curso]),
             TypeOrmModule.forFeature([Grado]),
            GradoModule
            ],
  controllers: [CursoController],
  providers: [CursoService],
})
export class CursoModule {}
