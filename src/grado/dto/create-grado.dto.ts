// create-grado.dto.ts
import { IsString, IsOptional, MaxLength, IsNotEmpty, IsNumber } from 'class-validator';


export class CreateGradoDto {
 
  @IsNumber()
  @IsNotEmpty()
  descripcion : number;
}
