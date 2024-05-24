import { DataSource, Repository } from 'typeorm';
import { Reporte } from '../models/reporte.model'; // Ajusta la ruta según tu estructura de proyecto

export class ReporteService {
  private reporteRepository: Repository<Reporte>;

  constructor(private dataSource: DataSource) {
    this.reporteRepository = dataSource.getRepository(Reporte);
  }

  // Crea un nuevo reporte y lo guarda en la base de datos
  public async crearReporte(reporteData: Reporte): Promise<Reporte> {
    const nuevoReporte = this.reporteRepository.create(reporteData);
    return await this.reporteRepository.save(nuevoReporte);
  }

  // Obtiene todos los reportes de la base de datos
  public async obtenerReportes(): Promise<Reporte[]> {
    return await this.reporteRepository.find();
  }

  // Obtiene un reporte por su ID
  public async obtenerReportePorId(reporteID: number): Promise<Reporte | null> {
    return await this.reporteRepository.findOne({
      where: { reporteID }
    });
  }

  // Actualiza un reporte existente y devuelve el reporte actualizado
  public async actualizarReporte(reporteID: number, reporteData: Partial<Reporte>): Promise<Reporte | null> {
    await this.reporteRepository.update(reporteID, reporteData);
    return await this.reporteRepository.findOne({
      where: { reporteID }
    });
  }

  // Elimina un reporte por su ID
  public async eliminarReporte(reporteID: number): Promise<void> {
    await this.reporteRepository.delete(reporteID);
  }
}
