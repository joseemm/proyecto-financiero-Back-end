import { DataSource } from 'typeorm';
import { Alerta } from '../models/Alertas.model';
export declare class AlertasService {
    private dataSource;
    private alertaRepository;
    constructor(dataSource: DataSource);
    crearAlerta(alertaData: Alerta): Promise<Alerta>;
    obtenerAlertas(): Promise<Alerta[]>;
    obtenerAlertaPorId(alertaID: number): Promise<Alerta | null>;
    actualizarAlerta(alertaID: number, alertaData: Partial<Alerta>): Promise<Alerta | null>;
    eliminarAlerta(alertaID: number): Promise<void>;
}
