import { Curso } from 'src/curso/entities/curso.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Grado {
  @PrimaryGeneratedColumn()
  idGrado: number;

  @Column({ type: 'int', unique: true})
  descripcion: number;

  @OneToMany(type => Curso, curso => curso.grado)
  cursos: Curso[];
}
