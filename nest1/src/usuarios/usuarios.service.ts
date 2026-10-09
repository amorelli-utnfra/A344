import { Injectable } from '@nestjs/common';
import { AlumnoService } from '../alumno/alumno.service.js';

@Injectable()
export class UsuariosService {

  constructor(private alumnoService: AlumnoService) {}
      getHello(): string {
    return 'Hello World!';
  }

  getTodos(): string {
    return 'Todos los usuarios';
  }

  getUno(id: string): any {
    const datosAlumno = this.alumnoService.getInformation(Number(id));
    return {
      id: id,
      datosAlumno: datosAlumno
    };
  }

  getRequest(req: Request): string {
    console.log(req);
    return `Request: ${req}`;
  }



}
