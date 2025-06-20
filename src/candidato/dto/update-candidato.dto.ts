import { PartialType } from '@nestjs/mapped-types';
import { CreateCandidatoDto } from './create-candidato.dto';

export class UpdateCandidatoDto extends PartialType(CreateCandidatoDto) {}