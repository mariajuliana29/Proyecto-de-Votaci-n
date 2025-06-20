import { Curso } from "src/curso/entities/curso.entity";
import { Rol } from "src/rol/entities/rol.entity";
import { Candidato } from '../../candidato/entities/candidato.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,OneToMany } from "typeorm";

@Entity()
export class Usuario {
@PrimaryGeneratedColumn()
idUsuario: number;

@Column({type: 'varchar', length: 20})
nombre: string;

@Column({type: 'varchar', length: 20})
apellido: string;

@Column({type: 'varchar', length: 15})
cedula: string;

@Column({type: 'varchar', length: 30})
email: string;

@Column({type: 'varchar', length: 200})
contrasena: string;

  @ManyToOne(() => Rol, { eager: true }) // eager para cargar automáticamente
  @JoinColumn({ name: 'id' })
  rol: Rol;

  @ManyToOne(() => Curso, { eager: true }) // eager para cargar automáticamente
  @JoinColumn({ name: 'id_curso' })
  curso: Curso;
  
  @OneToMany(() => Candidato, (candidato) => candidato.usuario)
  candidatos: Candidato[];
}

