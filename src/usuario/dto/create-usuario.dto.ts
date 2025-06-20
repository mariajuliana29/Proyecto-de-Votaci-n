import { IsString, IsEmail, IsNumber } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  readonly nombre: string;

  @IsString()
  readonly apellido: string;

  @IsString()
  readonly cedula: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly contrasena: string;

  @IsNumber()
  readonly idRol: number;

  @IsNumber()
  readonly idCurso: number;
}