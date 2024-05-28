import { Usuario } from './usuario.model';
export declare class Alerta {
    alertaID: number;
    usuarioID: number;
    tipoAlerta: string;
    valor: number;
    activa: boolean;
    mensaje: string;
    usuario: Usuario;
}
