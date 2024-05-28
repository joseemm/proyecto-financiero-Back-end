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
exports.PresupuestoService = void 0;
const presupuesto_model_1 = require("../models/presupuesto.model"); // Ajusta la ruta según tu estructura de proyecto
class PresupuestoService {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.presupuestoRepository = dataSource.getRepository(presupuesto_model_1.Presupuesto);
    }
    // Crea un nuevo presupuesto y lo guarda en la base de datos
    crearPresupuesto(presupuestoData) {
        return __awaiter(this, void 0, void 0, function* () {
            const nuevoPresupuesto = this.presupuestoRepository.create(presupuestoData);
            return yield this.presupuestoRepository.save(nuevoPresupuesto);
        });
    }
    // Obtiene todos los presupuestos de la base de datos
    obtenerPresupuestos() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.presupuestoRepository.find();
        });
    }
    // Obtiene un presupuesto por su ID
    obtenerPresupuestoPorId(presupuestoID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.presupuestoRepository.findOne({
                where: { presupuestoID }
            });
        });
    }
    // Actualiza un presupuesto existente y devuelve el presupuesto actualizado
    actualizarPresupuesto(presupuestoID, presupuestoData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.presupuestoRepository.update(presupuestoID, presupuestoData);
            return yield this.presupuestoRepository.findOne({
                where: { presupuestoID }
            });
        });
    }
    // Elimina un presupuesto por su ID
    eliminarPresupuesto(presupuestoID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.presupuestoRepository.delete(presupuestoID);
        });
    }
}
exports.PresupuestoService = PresupuestoService;
//# sourceMappingURL=presupuesto.service.js.map