import { Router, Request, Response } from 'express';
import { CategoriasPersonalizadasController } from '../controllers/CategoriasPersonalizadas.controller'; // Ajusta la ruta según tu estructura de proyecto
import { verificarToken } from '../middlewares/autenticacion.middleware'; // Importación del middleware de autenticación

const router = Router();
const categoriasController = new CategoriasPersonalizadasController();

// Ruta para crear una nueva categoría personalizada (protegida)
router.post('/', verificarToken, async (req: Request, res: Response) => {
  return categoriasController.crearCategoria(req, res);
});

// Ruta para obtener todas las categorías personalizadas (protegida)
router.get('/', verificarToken, async (req: Request, res: Response) => {
  return categoriasController.obtenerCategorias(req, res);
});

// Ruta para obtener una categoría personalizada por su ID (protegida)
router.get('/:id', verificarToken, async (req: Request, res: Response) => {
  return categoriasController.obtenerCategoria(req, res);
});

// Ruta para actualizar una categoría personalizada por su ID (protegida)
router.put('/:id', verificarToken, async (req: Request, res: Response) => {
  return categoriasController.actualizarCategoria(req, res);
});

// Ruta para eliminar una categoría personalizada por su ID (protegida)
router.delete('/:id', verificarToken, async (req: Request, res: Response) => {
  return categoriasController.eliminarCategoria(req, res);
});

export default router;
