import { Injectable } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from './entities/rol.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol)
    private rolRepository: Repository<Rol>,
  ) {}
  
  create(createRolDto: CreateRolDto) {
  
    return this.rolRepository.save(createRolDto);
  }

  async findAll(): Promise<Rol[]> {
    return this.rolRepository.find();
  }

  async findOne(id: number): Promise<Rol> {
    const rol = await this.rolRepository.findOne({ where: { id } });
    if (!rol) {
      throw new Error('Example not found'); // O puedes usar un NotFoundException de NestJS
    }
    return rol;
  }

  async update(id: number, updateRolDto: UpdateRolDto): Promise<Rol> {
    const rol = await this.findOne(id); // Verificamos que el Example existe
    if (!rol) {
      throw new Error('Example not found'); // O puedes usar un NotFoundException de NestJS
    }

    // Actualizamos la entidad
    Object.assign(rol, updateRolDto);
    return this.rolRepository.save(rol);
  }

  remove(id: number) {
    return `This action removes a #${id} rol`;
  }
}
