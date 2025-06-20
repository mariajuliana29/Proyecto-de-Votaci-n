import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Tipocandidatura } from '../../tipocandidatura/entities/tipocandidatura.entity';

@Entity()
export class Candidato {
  @PrimaryGeneratedColumn()
idCandidato: number;

  @Column()
  idUsuario: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.candidatos)
  @JoinColumn({ name: 'idUsuario' })
  usuario: Usuario;

  @Column()
  numeroTarjeton: number;

  @Column()
  idTipocandidatura: number;

  @ManyToOne(() => Tipocandidatura, (tipo) => tipo.candidatos)
  @JoinColumn({ name: 'idTipocandidatura' })
  tipocandidatura: Tipocandidatura;
}