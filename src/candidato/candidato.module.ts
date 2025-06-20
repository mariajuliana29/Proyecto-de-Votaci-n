import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candidato } from './entities/candidato.entity';
import { CandidatoService } from './candidato.service';
import { CandidatoController } from './candidato.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Candidato])],
  controllers: [CandidatoController],
  providers: [CandidatoService],
})
export class CandidatoModule {}