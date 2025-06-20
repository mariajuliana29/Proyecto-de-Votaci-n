import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Candidato } from '../../candidato/entities/candidato.entity';

@Entity()
export class Votacion {
  @PrimaryGeneratedColumn()
  idVotacion: number;

  @ManyToOne(() => Usuario, { eager: true })
@JoinColumn({ name: 'idUsuario' })
usuario: Usuario;

@ManyToOne(() => Candidato, { eager: true })
@JoinColumn({ name: 'idCandidato' })
candidato: Candidato;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;
}