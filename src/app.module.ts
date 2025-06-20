import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolModule } from './rol/rol.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rol } from './rol/entities/rol.entity';
import { GradoModule } from './grado/grado.module';
import { Grado } from './grado/entities/grado.entity';
import { CursoModule } from './curso/curso.module';
import { Curso } from './curso/entities/curso.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { TipocandidaturaModule } from './tipocandidatura/tipocandidatura.module';
import { Tipocandidatura } from './tipocandidatura/entities/tipocandidatura.entity';
import { CandidatoModule } from './candidato/candidato.module';
import { VotacionModule } from './votacion/votacion.module';
import { Votacion } from './votacion/entities/votacion.entity';
import { Candidato } from './candidato/entities/candidato.entity';

@Module({
  imports: [  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1193543037',
    database: 'codigo',
    entities: [Rol,Grado,Curso,Usuario,Tipocandidatura,Candidato,Votacion],
    synchronize: true,
  }),RolModule, GradoModule, CursoModule, UsuarioModule, TipocandidaturaModule, CandidatoModule, VotacionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
