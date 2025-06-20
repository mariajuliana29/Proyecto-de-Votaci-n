import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tipocandidatura } from './entities/tipocandidatura.entity';
import { TipocandidaturaService } from './tipocandidatura.service';
import { TipocandidaturaController } from './tipocandidatura.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Tipocandidatura])],
  controllers: [TipocandidaturaController],
  providers: [TipocandidaturaService],
  exports: [TypeOrmModule], 
})
export class TipocandidaturaModule {}