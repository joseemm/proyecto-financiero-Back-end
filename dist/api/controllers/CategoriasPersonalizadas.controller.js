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
exports.CategoriasPersonalizadasController = void 0;
const CategoriasPersonalizadas_service_1 = require("../../services/CategoriasPersonalizadas.service"); // Ajusta la ruta según tu estructura de proyecto
const data_source_1 = require("../../data-source"); // Asegúrate de que la instancia de DataSource esté configurada correctamente
class CategoriasPersonalizadasController {
    constructor() {
        this.categoriasService = new CategoriasPersonalizadas_service_1.CategoriasPersonalizadasService(data_source_1.AppDataSource);
    }
    crearCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoriaData = req.body;
                const nuevaCategoria = yield this.categoriasService.crearCategoria(categoriaData);
                return res.status(201).json(nuevaCategoria);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    obtenerCategorias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categorias = yield this.categoriasService.obtenerCategorias();
                return res.status(200).json(categorias);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    obtenerCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoriaID = parseInt(req.params.id);
                const categoria = yield this.categoriasService.obtenerCategoriaPorId(categoriaID);
                if (!categoria) {
                    return res.status(404).json({ error: 'Categoría no encontrada' });
                }
                return res.status(200).json(categoria);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    actualizarCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoriaID = parseInt(req.params.id);
                const categoriaData = req.body;
                const categoriaActualizada = yield this.categoriasService.actualizarCategoria(categoriaID, categoriaData);
                return res.status(200).json(categoriaActualizada);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    eliminarCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoriaID = parseInt(req.params.id);
                yield this.categoriasService.eliminarCategoria(categoriaID);
                return res.status(204).send();
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
}
exports.CategoriasPersonalizadasController = CategoriasPersonalizadasController;
//# sourceMappingURL=CategoriasPersonalizadas.controller.js.map