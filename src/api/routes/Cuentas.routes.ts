import { Router, Request, Response } from 'express';
import { CuentasController } from '../controllers/Cuentas.controller'; // Ajusta la ruta según tu estructura de proyecto
import { verificarToken } from '../middlewares/autenticacion.middleware'; // Importación del middleware de autenticación

const router = Router();
const cuentasController = new CuentasController();

// Ruta para crear una nueva cuenta (protegida)
router.post('/', verificarToken, async (req: Request, res: Response) => {
  return cuentasController.crearCuenta(req, res);
});

// Ruta para obtener todas las cuentas (protegida)
router.get('/', verificarToken, async (req: Request, res: Response) => {
  return cuentasController.obtenerCuentas(req, res);
});

// Ruta para obtener una cuenta por su ID (protegida)
router.get('/:id', verificarToken, async (req: Request, res: Response) => {
  return cuentasController.obtenerCuenta(req, res);
});

// Ruta para actualizar una cuenta por su ID (protegida)
router.put('/:id', verificarToken, async (req: Request, res: Response) => {
  return cuentasController.actualizarCuenta(req, res);
});

// Ruta para eliminar una cuenta por su ID (protegida)
router.delete('/:id', verificarToken, async (req: Request, res: Response) => {
  return cuentasController.eliminarCuenta(req, res);
});

export default router;
