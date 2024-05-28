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
const reporte_controller_1 = require("../controllers/reporte.controller");
const autenticacion_middleware_1 = require("../middlewares/autenticacion.middleware"); // Importación del middleware de autenticación
const logger_1 = __importDefault(require("../../utils/logger")); // Importación del Logger
const router = (0, express_1.Router)();
const reporteController = new reporte_controller_1.ReporteController();
const logger = logger_1.default.getInstance(); // Instancia del Logger
// Ruta para crear un nuevo reporte (protegida)
router.post('/', autenticacion_middleware_1.verificarToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    logger.info('Creando un nuevo reporte');
    return reporteController.crearReporte(req, res);
}));
// Ruta para obtener todos los reportes (protegida)
router.get('/', autenticacion_middleware_1.verificarToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    logger.info('Obteniendo todos los reportes');
    return reporteController.obtenerReportes(req, res);
}));
// Ruta para obtener un reporte por su ID (protegida)
router.get('/:id', autenticacion_middleware_1.verificarToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    logger.info(`Obteniendo el reporte con ID: ${req.params.id}`);
    return reporteController.obtenerReporte(req, res);
}));
// Ruta para actualizar un reporte por su ID (protegida)
router.put('/:id', autenticacion_middleware_1.verificarToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    logger.info(`Actualizando el reporte con ID: ${req.params.id}`);
    return reporteController.actualizarReporte(req, res);
}));
// Ruta para eliminar un reporte por su ID (protegida)
router.delete('/:id', autenticacion_middleware_1.verificarToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    logger.info(`Eliminando el reporte con ID: ${req.params.id}`);
    return reporteController.eliminarReporte(req, res);
}));
exports.default = router;
//# sourceMappingURL=reporte.routes.js.map