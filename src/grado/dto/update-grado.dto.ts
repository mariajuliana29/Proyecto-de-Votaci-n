import { PartialType } from '@nestjs/mapped-types';
import { CreateGradoDto } from './create-grado.dto';

export class UpdateGradoDto extends PartialType(CreateGradoDto) {}
