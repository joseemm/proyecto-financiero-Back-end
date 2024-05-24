import { Request, Response } from 'express';
import { TransaccionService } from '../../services/transaccion.service'; // Ajusta la ruta según tu estructura de proyecto
import { Transaccion } from '../../models/transaccion.model';
import { AppDataSource } from '../../data-source'; // Asegúrate de que la instancia de DataSource esté configurada correctamente

export class TransaccionController {
  private transaccionService: TransaccionService;

  constructor() {
    this.transaccionService = new TransaccionService(AppDataSource);
  }

  public async crearTransaccion(req: Request, res: Response): Promise<Response> {
    try {
      const transaccionData: Transaccion = req.body;
      const nuevaTransaccion = await this.transaccionService.crearTransaccion(transaccionData);
      return res.status(201).json(nuevaTransaccion);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async obtenerTransacciones(req: Request, res: Response): Promise<Response> {
    try {
      const transacciones = await this.transaccionService.obtenerTransacciones();
      return res.status(200).json(transacciones);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async obtenerTransaccion(req: Request, res: Response): Promise<Response> {
    try {
      const transaccionID = parseInt(req.params.id);
      const transaccion = await this.transaccionService.obtenerTransaccionPorId(transaccionID);
      if (!transaccion) {
        return res.status(404).json({ error: 'Transacción no encontrada' });
      }
      return res.status(200).json(transaccion);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async actualizarTransaccion(req: Request, res: Response): Promise<Response> {
    try {
      const transaccionID = parseInt(req.params.id);
      const transaccionData: Partial<Transaccion> = req.body;
      const transaccionActualizada = await this.transaccionService.actualizarTransaccion(transaccionID, transaccionData);
      return res.status(200).json(transaccionActualizada);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async eliminarTransaccion(req: Request, res: Response): Promise<Response> {
    try {
      const transaccionID = parseInt(req.params.id);
      await this.transaccionService.eliminarTransaccion(transaccionID);
      return res.status(204).send();
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }
}
