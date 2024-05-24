import { Router } from 'express';
import { UsuarioController } from '../controllers/usuario.controller';
import { verificarToken } from '../middlewares/autenticacion.middleware'; // Importación del middleware de autenticación
import Logger from '../../utils/logger'; // Importación del Logger

const router = Router();
const usuarioController = new UsuarioController();
const logger = Logger.getInstance(); // Instancia del Logger

// Ruta para crear un nuevo usuario
router.post('/', (req, res) => {
  logger.info('Intento de creación de un nuevo usuario');
  usuarioController.crearUsuario(req, res);
});

// Ruta para obtener todos los usuarios (protegida)
router.get('/', verificarToken, (req, res) => {
  logger.info('Solicitud para obtener todos los usuarios');
  usuarioController.obtenerUsuarios(req, res);
});

// Ruta para obtener un usuario por su ID (protegida)
router.get('/:id', verificarToken, (req, res) => {
  logger.info(`Solicitud para obtener el usuario con ID: ${req.params.id}`);
  usuarioController.obtenerUsuario(req, res);
});

// Ruta para actualizar un usuario por su ID (protegida)
router.put('/:id', verificarToken, (req, res) => {
  logger.info(`Intento de actualización del usuario con ID: ${req.params.id}`);
  usuarioController.actualizarUsuario(req, res);
});

// Ruta para eliminar un usuario por su ID (protegida)
router.delete('/:id', verificarToken, (req, res) => {
  logger.info(`Intento de eliminación del usuario con ID: ${req.params.id}`);
  usuarioController.eliminarUsuario(req, res);
});

export default router;
