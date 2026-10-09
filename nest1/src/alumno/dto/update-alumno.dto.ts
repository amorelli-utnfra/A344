import { PartialType } from '@nestjs/mapped-types';
import { CreateAlumnoDto } from './create-alumno.dto.js';

export class UpdateAlumnoDto extends PartialType(CreateAlumnoDto) {}
