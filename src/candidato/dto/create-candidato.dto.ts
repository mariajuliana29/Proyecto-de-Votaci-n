import { IsNumber } from 'class-validator';

export class CreateCandidatoDto {
  @IsNumber()
  readonly idUsuario: number;

  @IsNumber()
  readonly numeroTarjeton: number;

  // Si tienes idTipocandidatura:
  @IsNumber()
  readonly idTipocandidatura: number;
}