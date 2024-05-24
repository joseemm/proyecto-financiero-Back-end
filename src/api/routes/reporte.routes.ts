import { Router, Request, Response } from 'express';
import { ReporteController } from '../controllers/reporte.controller';
import { verificarToken } from '../middlewares/autenticacion.middleware'; // Importación del middleware de autenticación
import Logger from '../../utils/logger'; // Importación del Logger

const router = Router();
const reporteController = new ReporteController();
const logger = Logger.getInstance(); // Instancia del Logger

// Ruta para crear un nuevo reporte (protegida)
router.post('/', verificarToken, async (req: Request, res: Response) => {
  logger.info('Creando un nuevo reporte');
  return reporteController.crearReporte(req, res);
});

// Ruta para obtener todos los reportes (protegida)
router.get('/', verificarToken, async (req: Request, res: Response) => {
  logger.info('Obteniendo todos los reportes');
  return reporteController.obtenerReportes(req, res);
});

// Ruta para obtener un reporte por su ID (protegida)
router.get('/:id', verificarToken, async (req: Request, res: Response) => {
  logger.info(`Obteniendo el reporte con ID: ${req.params.id}`);
  return reporteController.obtenerReporte(req, res);
});

// Ruta para actualizar un reporte por su ID (protegida)
router.put('/:id', verificarToken, async (req: Request, res: Response) => {
  logger.info(`Actualizando el reporte con ID: ${req.params.id}`);
  return reporteController.actualizarReporte(req, res);
});

// Ruta para eliminar un reporte por su ID (protegida)
router.delete('/:id', verificarToken, async (req: Request, res: Response) => {
  logger.info(`Eliminando el reporte con ID: ${req.params.id}`);
  return reporteController.eliminarReporte(req, res);
});

export default router;
