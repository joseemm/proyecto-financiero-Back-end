"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transaccion_controller_1 = require("../controllers/transaccion.controller");
const autenticacion_middleware_1 = require("../middlewares/autenticacion.middleware"); // Importación del middleware de autenticación
const logger_1 = __importDefault(require("../../utils/logger")); // Importación del Logger
const router = (0, express_1.Router)();
const transaccionController = new transaccion_controller_1.TransaccionController();
const logger = logger_1.default.getInstance(); // Instancia del Logger
// Ruta para crear una nueva transacción (protegida)
router.post('/', autenticacion_middleware_1.verificarToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    logger.info('Creando una nueva transacción');
    return transaccionController.crearTransaccion(req, res);
}));
// Ruta para obtener todas las transacciones (protegida)
router.get('/', autenticacion_middleware_1.verificarToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    logger.info('Obteniendo todas las transacciones');
    return transaccionController.obtenerTransacciones(req, res);
}));
// Ruta para obtener una transacción por su ID (protegida)
router.get('/:id', autenticacion_middleware_1.verificarToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    logger.info(`Obteniendo la transacción con ID: ${req.params.id}`);
    return transaccionController.obtenerTransaccion(req, res);
}));
// Ruta para actualizar una transacción por su ID (protegida)
router.put('/:id', autenticacion_middleware_1.verificarToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    logger.info(`Actualizando la transacción con ID: ${req.params.id}`);
    return transaccionController.actualizarTransaccion(req, res);
}));
// Ruta para eliminar una transacción por su ID (protegida)
router.delete('/:id', autenticacion_middleware_1.verificarToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    logger.info(`Eliminando la transacción con ID: ${req.params.id}`);
    return transaccionController.eliminarTransaccion(req, res);
}));
exports.default = router;
//# sourceMappingURL=transaccion.routes.js.map