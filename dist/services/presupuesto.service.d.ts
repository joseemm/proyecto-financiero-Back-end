import { DataSource } from 'typeorm';
import { Presupuesto } from '../models/presupuesto.model';
export declare class PresupuestoService {
    private dataSource;
    private presupuestoRepository;
    constructor(dataSource: DataSource);
    crearPresupuesto(presupuestoData: Presupuesto): Promise<Presupuesto>;
    obtenerPresupuestos(): Promise<Presupuesto[]>;
    obtenerPresupuestoPorId(presupuestoID: number): Promise<Presupuesto | null>;
    actualizarPresupuesto(presupuestoID: number, presupuestoData: Partial<Presupuesto>): Promise<Presupuesto | null>;
    eliminarPresupuesto(presupuestoID: number): Promise<void>;
}
