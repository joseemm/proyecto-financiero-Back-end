import { Router, Request, Response } from 'express';
import { AlertasController } from '../controllers/Alertas.controller'; // Ajusta la ruta según tu estructura de proyecto
import { verificarToken } from '../middlewares/autenticacion.middleware'; // Importación del middleware de autenticación

const router = Router();
const alertasController = new AlertasController();

// Ruta para crear una nueva alerta (protegida)
router.post('/', verificarToken, async (req: Request, res: Response) => {
  return alertasController.crearAlerta(req, res);
});

// Ruta para obtener todas las alertas (protegida)
router.get('/', verificarToken, async (req: Request, res: Response) => {
  return alertasController.obtenerAlertas(req, res);
});

// Ruta para obtener una alerta por su ID (protegida)
router.get('/:id', verificarToken, async (req: Request, res: Response) => {
  return alertasController.obtenerAlerta(req, res);
});

// Ruta para actualizar una alerta por su ID (protegida)
router.put('/:id', verificarToken, async (req: Request, res: Response) => {
  return alertasController.actualizarAlerta(req, res);
});

// Ruta para eliminar una alerta por su ID (protegida)
router.delete('/:id', verificarToken, async (req: Request, res: Response) => {
  return alertasController.eliminarAlerta(req, res);
});

export default router;
