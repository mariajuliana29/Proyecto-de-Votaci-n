import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  create(createUsuarioDto: CreateUsuarioDto) {
  const usuario = this.usuarioRepository.create({
    nombre: createUsuarioDto.nombre,
    apellido: createUsuarioDto.apellido,
    cedula: createUsuarioDto.cedula,
    email: createUsuarioDto.email,
    contrasena: createUsuarioDto.contrasena,
    rol: { id: createUsuarioDto.idRol }, // Relación con Rol
    curso: { idCurso: createUsuarioDto.idCurso } // Relación con Curso
  });
  return this.usuarioRepository.save(usuario);
}

  findAll() {
    return this.usuarioRepository.find();
  }

  findOne(id: number) {
    return this.usuarioRepository.findOneBy({ idUsuario: id });
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioRepository.update(id, updateUsuarioDto);
  }

  remove(id: number) {
    return this.usuarioRepository.delete(id);
  }
}