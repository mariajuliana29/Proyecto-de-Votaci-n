import { IsString, Length } from "class-validator";

export class CreateRolDto {
    @IsString()  // Validación para que sea una cadena de texto
    @Length(1, 20)  // Validación para que tenga una longitud mínima de 1 y máxima de 20 caracteres
    descripcion: string;
}
