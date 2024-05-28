import { Usuario } from './usuario.model';
export declare class Cuenta {
    cuentaID: number;
    usuarioID: number;
    nombreCuenta: string;
    tipoCuenta: string;
    saldo: number;
    usuario: Usuario;
}
