import { Usuario } from './usuario.model';
export declare class Reporte {
    reporteID: number;
    usuarioID: number;
    tipoReporte: string;
    fechaGeneracion: Date;
    contenido: string;
    usuario: Usuario;
}
