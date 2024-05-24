import { Request, Response } from 'express';
import { PresupuestoService } from '../../services/presupuesto.service'; // Ajusta la ruta según tu estructura de proyecto
import { Presupuesto } from '../../models/presupuesto.model';
import { AppDataSource } from '../../data-source'; // Asegúrate de que la instancia de DataSource esté configurada correctamente

export class PresupuestoController {
  private presupuestoService: PresupuestoService;

  constructor() {
    this.presupuestoService = new PresupuestoService(AppDataSource);
  }

  public async crearPresupuesto(req: Request, res: Response): Promise<Response> {
    try {
      const presupuestoData: Presupuesto = req.body;
      const nuevoPresupuesto = await this.presupuestoService.crearPresupuesto(presupuestoData);
      return res.status(201).json(nuevoPresupuesto);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async obtenerPresupuestos(req: Request, res: Response): Promise<Response> {
    try {
      const presupuestos = await this.presupuestoService.obtenerPresupuestos();
      return res.status(200).json(presupuestos);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async obtenerPresupuesto(req: Request, res: Response): Promise<Response> {
    try {
      const presupuestoID = parseInt(req.params.id);
      const presupuesto = await this.presupuestoService.obtenerPresupuestoPorId(presupuestoID);
      if (!presupuesto) {
        return res.status(404).json({ error: 'Presupuesto no encontrado' });
      }
      return res.status(200).json(presupuesto);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async actualizarPresupuesto(req: Request, res: Response): Promise<Response> {
    try {
      const presupuestoID = parseInt(req.params.id);
      const presupuestoData: Partial<Presupuesto> = req.body;
      const presupuestoActualizado = await this.presupuestoService.actualizarPresupuesto(presupuestoID, presupuestoData);
      return res.status(200).json(presupuestoActualizado);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async eliminarPresupuesto(req: Request, res: Response): Promise<Response> {
    try {
      const presupuestoID = parseInt(req.params.id);
      await this.presupuestoService.eliminarPresupuesto(presupuestoID);
      return res.status(204).send();
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }
}
