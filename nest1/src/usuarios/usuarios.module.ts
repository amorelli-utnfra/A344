import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller.js';
import { UsuariosService } from './usuarios.service.js';
import { AlumnoModule } from '../alumno/alumno.module.js';
import { AlumnoService } from '../alumno/alumno.service.js';


@Module({
  imports: [],
  controllers: [UsuariosController],
  providers: [UsuariosService, AlumnoService],
})
export class UsuariosModule {}
