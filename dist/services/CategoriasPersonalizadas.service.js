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
exports.CategoriasPersonalizadasService = void 0;
const CategoriasPersonalizadas_model_1 = require("../models/CategoriasPersonalizadas.model"); // Ajusta la ruta según tu estructura de proyecto
class CategoriasPersonalizadasService {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.categoriaRepository = dataSource.getRepository(CategoriasPersonalizadas_model_1.CategoriaPersonalizada);
    }
    // Crea una nueva categoría personalizada y la guarda en la base de datos
    crearCategoria(categoriaData) {
        return __awaiter(this, void 0, void 0, function* () {
            const nuevaCategoria = this.categoriaRepository.create(categoriaData);
            return yield this.categoriaRepository.save(nuevaCategoria);
        });
    }
    // Obtiene todas las categorías personalizadas de la base de datos
    obtenerCategorias() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoriaRepository.find();
        });
    }
    // Obtiene una categoría personalizada por su ID
    obtenerCategoriaPorId(categoriaID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoriaRepository.findOne({
                where: { categoriaID }
            });
        });
    }
    // Actualiza una categoría personalizada existente y devuelve la categoría actualizada
    actualizarCategoria(categoriaID, categoriaData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.categoriaRepository.update(categoriaID, categoriaData);
            return yield this.categoriaRepository.findOne({
                where: { categoriaID }
            });
        });
    }
    // Elimina una categoría personalizada por su ID
    eliminarCategoria(categoriaID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.categoriaRepository.delete(categoriaID);
        });
    }
}
exports.CategoriasPersonalizadasService = CategoriasPersonalizadasService;
//# sourceMappingURL=CategoriasPersonalizadas.service.js.map