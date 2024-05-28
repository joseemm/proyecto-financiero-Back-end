import { DataSource } from 'typeorm';
import { Transaccion } from '../models/transaccion.model';
export declare class TransaccionService {
    private dataSource;
    private transaccionRepository;
    private logger;
    constructor(dataSource: DataSource);
    crearTransaccion(transaccionData: Transaccion): Promise<Transaccion>;
    obtenerTransacciones(): Promise<Transaccion[]>;
    obtenerTransaccionPorId(transaccionID: number): Promise<Transaccion | null>;
    actualizarTransaccion(transaccionID: number, transaccionData: Partial<Transaccion>): Promise<Transaccion | null>;
    eliminarTransaccion(transaccionID: number): Promise<void>;
}
