import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Votacion } from './entities/votacion.entity';
import { VotacionService } from './votacion.service';
import { VotacionController } from './votacion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Votacion])],
  controllers: [VotacionController],
  providers: [VotacionService],
})
export class VotacionModule {}