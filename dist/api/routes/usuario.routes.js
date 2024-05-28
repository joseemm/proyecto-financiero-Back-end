"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
const autenticacion_middleware_1 = require("../middlewares/autenticacion.middleware"); // Importación del middleware de autenticación
const logger_1 = __importDefault(require("../../utils/logger")); // Importación del Logger
const router = (0, express_1.Router)();
const usuarioController = new usuario_controller_1.UsuarioController();
const logger = logger_1.default.getInstance(); // Instancia del Logger
// Ruta para crear un nuevo usuario
router.post('/', (req, res) => {
    logger.info('Intento de creación de un nuevo usuario');
    usuarioController.crearUsuario(req, res);
});
// Ruta para obtener todos los usuarios (protegida)
router.get('/', autenticacion_middleware_1.verificarToken, (req, res) => {
    logger.info('Solicitud para obtener todos los usuarios');
    usuarioController.obtenerUsuarios(req, res);
});
// Ruta para obtener un usuario por su ID (protegida)
router.get('/:id', autenticacion_middleware_1.verificarToken, (req, res) => {
    logger.info(`Solicitud para obtener el usuario con ID: ${req.params.id}`);
    usuarioController.obtenerUsuario(req, res);
});
// Ruta para actualizar un usuario por su ID (protegida)
router.put('/:id', autenticacion_middleware_1.verificarToken, (req, res) => {
    logger.info(`Intento de actualización del usuario con ID: ${req.params.id}`);
    usuarioController.actualizarUsuario(req, res);
});
// Ruta para eliminar un usuario por su ID (protegida)
router.delete('/:id', autenticacion_middleware_1.verificarToken, (req, res) => {
    logger.info(`Intento de eliminación del usuario con ID: ${req.params.id}`);
    usuarioController.eliminarUsuario(req, res);
});
exports.default = router;
//# sourceMappingURL=usuario.routes.js.map