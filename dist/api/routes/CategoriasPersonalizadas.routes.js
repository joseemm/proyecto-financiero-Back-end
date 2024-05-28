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
const CategoriasPersonalizadas_controller_1 = require("../controllers/CategoriasPersonalizadas.controller"); // Ajusta la ruta según tu estructura de proyecto
const autenticacion_middleware_1 = require("../middlewares/autenticacion.middleware"); // Importación del middleware de autenticación
const router = (0, express_1.Router)();
const categoriasController = new CategoriasPersonalizadas_controller_1.CategoriasPersonalizadasController();
// Ruta para crear una nueva categoría personalizada (protegida)
router.post('/', autenticacion_middleware_1.verificarToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return categoriasController.crearCategoria(req, res);
}));
// Ruta para obtener todas las categorías personalizadas (protegida)
router.get('/', autenticacion_middleware_1.verificarToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return categoriasController.obtenerCategorias(req, res);
}));
// Ruta para obtener una categoría personalizada por su ID (protegida)
router.get('/:id', autenticacion_middleware_1.verificarToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return categoriasController.obtenerCategoria(req, res);
}));
// Ruta para actualizar una categoría personalizada por su ID (protegida)
router.put('/:id', autenticacion_middleware_1.verificarToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return categoriasController.actualizarCategoria(req, res);
}));
// Ruta para eliminar una categoría personalizada por su ID (protegida)
router.delete('/:id', autenticacion_middleware_1.verificarToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return categoriasController.eliminarCategoria(req, res);
}));
exports.default = router;
//# sourceMappingURL=CategoriasPersonalizadas.routes.js.map