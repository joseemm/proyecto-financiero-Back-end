import { Request, Response } from 'express';
import { AlertasService } from '../../services/Alertas.service'; // Ajusta la ruta según tu estructura de proyecto
import { Alerta } from '../../models/Alertas.model';
import { AppDataSource } from '../../data-source'; // Asegúrate de que la instancia de DataSource esté configurada correctamente

export class AlertasController {
  private alertasService: AlertasService;

  constructor() {
    this.alertasService = new AlertasService(AppDataSource);
  }

  public async crearAlerta(req: Request, res: Response): Promise<Response> {
    try {
      const alertaData: Alerta = req.body;
      const nuevaAlerta = await this.alertasService.crearAlerta(alertaData);
      return res.status(201).json(nuevaAlerta);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async obtenerAlertas(req: Request, res: Response): Promise<Response> {
    try {
      const alertas = await this.alertasService.obtenerAlertas();
      return res.status(200).json(alertas);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async obtenerAlerta(req: Request, res: Response): Promise<Response> {
    try {
      const alertaID = parseInt(req.params.id);
      const alerta = await this.alertasService.obtenerAlertaPorId(alertaID);
      if (!alerta) {
        return res.status(404).json({ error: 'Alerta no encontrada' });
      }
      return res.status(200).json(alerta);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async actualizarAlerta(req: Request, res: Response): Promise<Response> {
    try {
      const alertaID = parseInt(req.params.id);
      const alertaData: Partial<Alerta> = req.body;
      const alertaActualizada = await this.alertasService.actualizarAlerta(alertaID, alertaData);
      return res.status(200).json(alertaActualizada);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async eliminarAlerta(req: Request, res: Response): Promise<Response> {
    try {
      const alertaID = parseInt(req.params.id);
      await this.alertasService.eliminarAlerta(alertaID);
      return res.status(204).send();
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }
}
