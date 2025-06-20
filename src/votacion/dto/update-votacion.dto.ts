import { PartialType } from '@nestjs/mapped-types';
import { CreateVotacionDto } from './create-votacion.dto';

export class UpdateVotacionDto extends PartialType(CreateVotacionDto) {}