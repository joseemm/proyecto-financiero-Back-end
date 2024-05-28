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
const Cuentas_controller_1 = require("../controllers/Cuentas.controller"); // Ajusta la ruta según tu estructura de proyecto
const autenticacion_middleware_1 = require("../middlewares/autenticacion.middleware"); // Importación del middleware de autenticación
const router = (0, express_1.Router)();
const cuentasController = new Cuentas_controller_1.CuentasController();
// Ruta para crear una nueva cuenta (protegida)
router.post('/', autenticacion_middleware_1.verificarToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return cuentasController.crearCuenta(req, res);
}));
// Ruta para obtener todas las cuentas (protegida)
router.get('/', autenticacion_middleware_1.verificarToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return cuentasController.obtenerCuentas(req, res);
}));
// Ruta para obtener una cuenta por su ID (protegida)
router.get('/:id', autenticacion_middleware_1.verificarToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return cuentasController.obtenerCuenta(req, res);
}));
// Ruta para actualizar una cuenta por su ID (protegida)
router.put('/:id', autenticacion_middleware_1.verificarToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return cuentasController.actualizarCuenta(req, res);
}));
// Ruta para eliminar una cuenta por su ID (protegida)
router.delete('/:id', autenticacion_middleware_1.verificarToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return cuentasController.eliminarCuenta(req, res);
}));
exports.default = router;
//# sourceMappingURL=Cuentas.routes.js.map