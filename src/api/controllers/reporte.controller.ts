import { Request, Response } from 'express';
import { ReporteService } from '../../services/reporte.service'; // Ajusta la ruta según tu estructura de proyecto
import { Reporte } from '../../models/reporte.model';
import { AppDataSource } from '../../data-source'; // Asegúrate de que la instancia de DataSource esté configurada correctamente

export class ReporteController {
  private reporteService: ReporteService;

  constructor() {
    this.reporteService = new ReporteService(AppDataSource);
  }

  public async crearReporte(req: Request, res: Response): Promise<Response> {
    try {
      const reporteData: Reporte = req.body;
      const nuevoReporte = await this.reporteService.crearReporte(reporteData);
      return res.status(201).json(nuevoReporte);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async obtenerReportes(req: Request, res: Response): Promise<Response> {
    try {
      const reportes = await this.reporteService.obtenerReportes();
      return res.status(200).json(reportes);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async obtenerReporte(req: Request, res: Response): Promise<Response> {
    try {
      const reporteID = parseInt(req.params.id);
      const reporte = await this.reporteService.obtenerReportePorId(reporteID);
      if (!reporte) {
        return res.status(404).json({ error: 'Reporte no encontrado' });
      }
      return res.status(200).json(reporte);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async actualizarReporte(req: Request, res: Response): Promise<Response> {
    try {
      const reporteID = parseInt(req.params.id);
      const reporteData: Partial<Reporte> = req.body;
      const reporteActualizado = await this.reporteService.actualizarReporte(reporteID, reporteData);
      return res.status(200).json(reporteActualizado);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async eliminarReporte(req: Request, res: Response): Promise<Response> {
    try {
      const reporteID = parseInt(req.params.id);
      await this.reporteService.eliminarReporte(reporteID);
      return res.status(204).send();
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }
}
