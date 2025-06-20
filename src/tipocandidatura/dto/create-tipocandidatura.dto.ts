import { IsString, IsOptional } from 'class-validator';

export class CreateTipocandidaturaDto {
  @IsString()
  readonly nombre: string;

  @IsString()
  @IsOptional()
  readonly descripcion?: string;
}