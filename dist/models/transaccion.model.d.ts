import { CategoriaPersonalizada } from './CategoriasPersonalizadas.model';
import { Cuenta } from './Cuentas.model';
export declare class Transaccion {
    private logger;
    transaccionID: number;
    cuentaID: number;
    categoriaID: number;
    tipoTransaccion: string;
    monto: number;
    fecha: Date;
    descripcion: string;
    cuenta: Cuenta;
    categoriaPersonalizada: CategoriaPersonalizada;
    registrarCreacion(): void;
}
