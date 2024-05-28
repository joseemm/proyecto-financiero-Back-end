import { DataSource } from 'typeorm';
import { Cuenta } from '../models/Cuentas.model';
export declare class CuentasService {
    private dataSource;
    private cuentaRepository;
    constructor(dataSource: DataSource);
    crearCuenta(cuentaData: Cuenta): Promise<Cuenta>;
    obtenerCuentas(): Promise<Cuenta[]>;
    obtenerCuentaPorId(cuentaID: number): Promise<Cuenta | null>;
    actualizarCuenta(cuentaID: number, cuentaData: Partial<Cuenta>): Promise<Cuenta | null>;
    eliminarCuenta(cuentaID: number): Promise<void>;
}
