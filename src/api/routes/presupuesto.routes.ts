import { Router, Request, Response } from 'express';
import { PresupuestoController } from '../controllers/presupuesto.controller';
import { verificarToken } from '../middlewares/autenticacion.middleware'; // Asegúrate de que la ruta sea correcta

const router = Router();
const presupuestoController = new PresupuestoController();

// Ruta para crear un nuevo presupuesto (protegida)
router.post('/', verificarToken, async (req: Request, res: Response) => {
  return presupuestoController.crearPresupuesto(req, res);
});

// Ruta para obtener todos los presupuestos (protegida)
router.get('/', verificarToken, async (req: Request, res: Response) => {
  return presupuestoController.obtenerPresupuestos(req, res);
});

// Ruta para obtener un presupuesto por su ID (protegida)
router.get('/:id', verificarToken, async (req: Request, res: Response) => {
  return presupuestoController.obtenerPresupuesto(req, res);
});

// Ruta para actualizar un presupuesto por su ID (protegida)
router.put('/:id', verificarToken, async (req: Request, res: Response) => {
  return presupuestoController.actualizarPresupuesto(req, res);
});

// Ruta para eliminar un presupuesto por su ID (protegida)
router.delete('/:id', verificarToken, async (req: Request, res: Response) => {
  return presupuestoController.eliminarPresupuesto(req, res);
});

export default router;
