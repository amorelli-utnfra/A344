export class Alumno {
    id: number;
    nombre: string;
    apellido: string;
    legajo: number;
    materias: Materia[];
    libre: boolean;
}

export interface Materia {
    id: number;
    nombre: string;
}
