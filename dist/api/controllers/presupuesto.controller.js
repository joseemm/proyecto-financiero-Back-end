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
exports.PresupuestoController = void 0;
const presupuesto_service_1 = require("../../services/presupuesto.service"); // Ajusta la ruta según tu estructura de proyecto
const data_source_1 = require("../../data-source"); // Asegúrate de que la instancia de DataSource esté configurada correctamente
class PresupuestoController {
    constructor() {
        this.presupuestoService = new presupuesto_service_1.PresupuestoService(data_source_1.AppDataSource);
    }
    crearPresupuesto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const presupuestoData = req.body;
                const nuevoPresupuesto = yield this.presupuestoService.crearPresupuesto(presupuestoData);
                return res.status(201).json(nuevoPresupuesto);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    obtenerPresupuestos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const presupuestos = yield this.presupuestoService.obtenerPresupuestos();
                return res.status(200).json(presupuestos);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    obtenerPresupuesto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const presupuestoID = parseInt(req.params.id);
                const presupuesto = yield this.presupuestoService.obtenerPresupuestoPorId(presupuestoID);
                if (!presupuesto) {
                    return res.status(404).json({ error: 'Presupuesto no encontrado' });
                }
                return res.status(200).json(presupuesto);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    actualizarPresupuesto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const presupuestoID = parseInt(req.params.id);
                const presupuestoData = req.body;
                const presupuestoActualizado = yield this.presupuestoService.actualizarPresupuesto(presupuestoID, presupuestoData);
                return res.status(200).json(presupuestoActualizado);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    eliminarPresupuesto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const presupuestoID = parseInt(req.params.id);
                yield this.presupuestoService.eliminarPresupuesto(presupuestoID);
                return res.status(204).send();
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
}
exports.PresupuestoController = PresupuestoController;
//# sourceMappingURL=presupuesto.controller.js.map