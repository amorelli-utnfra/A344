import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module.js';
import { AlumnoModule } from './alumno/alumno.module.js';

@Module({
  imports: [UsuariosModule, AlumnoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
