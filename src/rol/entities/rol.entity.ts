import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Rol {
    // Nombre de la tabla en la base de datos

  @PrimaryGeneratedColumn()  // El campo id será clave primaria y autoincrementable
  id: number;

  @Column({ type: 'varchar', length: 20, nullable: false })  // Descripción de tipo varchar con longitud 20 y no permite null
  descripcion: string;

  @OneToMany(type => Usuario, usuario => usuario.rol)
    usuarios: Usuario[];
}

