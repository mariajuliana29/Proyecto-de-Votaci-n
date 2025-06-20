import { Candidato } from '../../candidato/entities/candidato.entity';
import { Column, Entity, PrimaryGeneratedColumn,OneToMany } from "typeorm";

@Entity()
export class Tipocandidatura {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
descripcion: string;
  
  @OneToMany(() => Candidato, (candidato) => candidato.tipocandidatura)
  candidatos: Candidato[];

}
