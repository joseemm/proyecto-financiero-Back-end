import { DataSource } from 'typeorm';
import { Reporte } from '../models/reporte.model';
export declare class ReporteService {
    private dataSource;
    private reporteRepository;
    constructor(dataSource: DataSource);
    crearReporte(reporteData: Reporte): Promise<Reporte>;
    obtenerReportes(): Promise<Reporte[]>;
    obtenerReportePorId(reporteID: number): Promise<Reporte | null>;
    actualizarReporte(reporteID: number, reporteData: Partial<Reporte>): Promise<Reporte | null>;
    eliminarReporte(reporteID: number): Promise<void>;
}
