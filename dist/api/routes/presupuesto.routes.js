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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const presupuesto_controller_1 = require("../controllers/presupuesto.controller");
const autenticacion_middleware_1 = require("../middlewares/autenticacion.middleware"); // Asegúrate de que la ruta sea correcta
const router = (0, express_1.Router)();
const presupuestoController = new presupuesto_controller_1.PresupuestoController();
// Ruta para crear un nuevo presupuesto (protegida)
router.post('/', autenticacion_middleware_1.verificarToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return presupuestoController.crearPresupuesto(req, res);
}));
// Ruta para obtener todos los presupuestos (protegida)
router.get('/', autenticacion_middleware_1.verificarToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return presupuestoController.obtenerPresupuestos(req, res);
}));
// Ruta para obtener un presupuesto por su ID (protegida)
router.get('/:id', autenticacion_middleware_1.verificarToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return presupuestoController.obtenerPresupuesto(req, res);
}));
// Ruta para actualizar un presupuesto por su ID (protegida)
router.put('/:id', autenticacion_middleware_1.verificarToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return presupuestoController.actualizarPresupuesto(req, res);
}));
// Ruta para eliminar un presupuesto por su ID (protegida)
router.delete('/:id', autenticacion_middleware_1.verificarToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return presupuestoController.eliminarPresupuesto(req, res);
}));
exports.default = router;
//# sourceMappingURL=presupuesto.routes.js.map