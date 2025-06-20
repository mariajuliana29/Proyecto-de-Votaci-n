// create-curso.dto.ts
import { IsString, MaxLength, IsInt, IsPositive, IsNotEmpty } from 'class-validator';


export class CreateCursoDto {
  
  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  nomenclatura : string;

  
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  gradoId: number;
}
