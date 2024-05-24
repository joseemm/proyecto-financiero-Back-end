import { Router, Request, Response } from 'express';
import { TransaccionController } from '../controllers/transaccion.controller';
import { verificarToken } from '../middlewares/autenticacion.middleware'; // Importación del middleware de autenticación
import Logger from '../../utils/logger'; // Importación del Logger

const router = Router();
const transaccionController = new TransaccionController();
const logger = Logger.getInstance(); // Instancia del Logger

// Ruta para crear una nueva transacción (protegida)
router.post('/', verificarToken, async (req: Request, res: Response) => {
  logger.info('Creando una nueva transacción');
  return transaccionController.crearTransaccion(req, res);
});

// Ruta para obtener todas las transacciones (protegida)
router.get('/', verificarToken, async (req: Request, res: Response) => {
  logger.info('Obteniendo todas las transacciones');
  return transaccionController.obtenerTransacciones(req, res);
});

// Ruta para obtener una transacción por su ID (protegida)
router.get('/:id', verificarToken, async (req: Request, res: Response) => {
  logger.info(`Obteniendo la transacción con ID: ${req.params.id}`);
  return transaccionController.obtenerTransaccion(req, res);
});

// Ruta para actualizar una transacción por su ID (protegida)
router.put('/:id', verificarToken, async (req: Request, res: Response) => {
  logger.info(`Actualizando la transacción con ID: ${req.params.id}`);
  return transaccionController.actualizarTransaccion(req, res);
});

// Ruta para eliminar una transacción por su ID (protegida)
router.delete('/:id', verificarToken, async (req: Request, res: Response) => {
  logger.info(`Eliminando la transacción con ID: ${req.params.id}`);
  return transaccionController.eliminarTransaccion(req, res);
});

export default router;
