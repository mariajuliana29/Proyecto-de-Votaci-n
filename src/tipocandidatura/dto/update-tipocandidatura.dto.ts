import { PartialType } from '@nestjs/mapped-types';
import { CreateTipocandidaturaDto } from './create-tipocandidatura.dto';

export class UpdateTipocandidaturaDto extends PartialType(CreateTipocandidaturaDto) {}
