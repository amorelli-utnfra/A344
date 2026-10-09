import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpStatus, DefaultValuePipe } from '@nestjs/common';
import { AlumnoService } from './alumno.service.js';
import { CreateAlumnoDto } from './dto/create-alumno.dto.js';
import { UpdateAlumnoDto } from './dto/update-alumno.dto.js';

@Controller('alumno')
export class AlumnoController {
  constructor(private readonly alumnoService: AlumnoService) {}

  @Post()
  create(@Body() createAlumnoDto: CreateAlumnoDto) {
    return this.alumnoService.create(createAlumnoDto);
  }

  @Get()
  findAll() {
    return this.alumnoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',new ParseIntPipe({
    errorHttpStatusCode: HttpStatus.CONFLICT
  })) id: number) {
    return this.alumnoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateAlumnoDto: UpdateAlumnoDto) {
    return this.alumnoService.update(id, updateAlumnoDto);
  }

  @Delete(':id')
  remove(@Param('id', new DefaultValuePipe(0)) id: number) {
    return this.alumnoService.remove(id);
  }

}
