import { IsOptional,IsNumber } from 'class-validator';


export class CreateVotacionDto {
  @IsNumber()
  idUsuario: number;

  @IsNumber()
  idCandidato: number;

  @IsOptional()
  readonly fecha?: Date;
}