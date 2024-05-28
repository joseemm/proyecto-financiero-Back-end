import { Usuario } from './usuario.model';
export declare class Presupuesto {
    presupuestoID: number;
    usuarioID: number;
    nombrePresupuesto: string;
    monto: number;
    fechaInicio: Date;
    fechaFin: Date;
    usuario: Usuario;
}
