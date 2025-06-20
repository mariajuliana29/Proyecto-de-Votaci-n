import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Grado } from '../../grado/entities/grado.entity'
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Entity()
export class Curso {
  @PrimaryGeneratedColumn({ name: 'id_curso' })
  idCurso: number;

  @Column({type: 'varchar', length: 2})
  nomenclatura: string;

  @ManyToOne(() => Grado, { eager: true }) // eager para cargar automáticamente
  @JoinColumn({ name: 'idGrado' })
  grado: Grado;

  @OneToMany(type => Usuario, usuario => usuario.curso)
   usuarios: Usuario[];
}

