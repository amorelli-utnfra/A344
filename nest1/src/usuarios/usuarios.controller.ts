import { Controller, Get, HttpCode, Param, Query, Req } from '@nestjs/common';
import { UsuariosService } from './usuarios.service.js';

@Controller('usuarios')
export class UsuariosController {

    constructor(private readonly usuariosService: UsuariosService) {}
    
      @Get()
      devolverHola(): string {
        return this.usuariosService.getHello();
      }
    
      @Get('todos')
      traerTodos(@Query() query: string): string {
        console.log(query);
        return this.usuariosService.getTodos();
      }
    
      @Get('request/:id')
      @HttpCode(204)
      getRequest(@Req() req: Request): string {
        return this.usuariosService.getRequest(req);
      }
    
      @Get(':id')
      traerUno(@Param('id') id: string): any {
        return this.usuariosService.getUno(id);
      }


}
