import { DefaultValuePipe } from "@nestjs/common";
import { IsString, IsNotEmpty, IsInt } from "class-validator";

export class CreateAlumnoDto {
    @IsString()
    nombre: string;

    @IsString()
    apellido: string;

    @IsString({ each: true })
    materias: number[];

    @IsNotEmpty()
    @IsInt({ message: 'Legajo de ser un número entero' })
    legajo: number;

}
