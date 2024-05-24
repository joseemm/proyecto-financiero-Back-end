import { Request, Response } from 'express';
import { CuentasService } from '../../services/Cuentas.service'; // Ajusta la ruta según tu estructura de proyecto
import { Cuenta } from '../../models/Cuentas.model';
import { AppDataSource } from '../../data-source'; // Asegúrate de que la instancia de DataSource esté configurada correctamente

export class CuentasController {
  private cuentasService: CuentasService;

  constructor() {
    this.cuentasService = new CuentasService(AppDataSource);
  }

  public async crearCuenta(req: Request, res: Response): Promise<Response> {
    try {
      const cuentaData: Cuenta = req.body;
      const nuevaCuenta = await this.cuentasService.crearCuenta(cuentaData);
      return res.status(201).json(nuevaCuenta);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async obtenerCuentas(req: Request, res: Response): Promise<Response> {
    try {
      const cuentas = await this.cuentasService.obtenerCuentas();
      return res.status(200).json(cuentas);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async obtenerCuenta(req: Request, res: Response): Promise<Response> {
    try {
      const cuentaID = parseInt(req.params.id);
      const cuenta = await this.cuentasService.obtenerCuentaPorId(cuentaID);
      if (!cuenta) {
        return res.status(404).json({ error: 'Cuenta no encontrada' });
      }
      return res.status(200).json(cuenta);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async actualizarCuenta(req: Request, res: Response): Promise<Response> {
    try {
      const cuentaID = parseInt(req.params.id);
      const cuentaData: Partial<Cuenta> = req.body;
      const cuentaActualizada = await this.cuentasService.actualizarCuenta(cuentaID, cuentaData);
      return res.status(200).json(cuentaActualizada);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async eliminarCuenta(req: Request, res: Response): Promise<Response> {
    try {
      const cuentaID = parseInt(req.params.id);
      await this.cuentasService.eliminarCuenta(cuentaID);
      return res.status(204).send();
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }
}
