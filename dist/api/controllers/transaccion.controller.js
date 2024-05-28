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
exports.TransaccionController = void 0;
const transaccion_service_1 = require("../../services/transaccion.service"); // Ajusta la ruta según tu estructura de proyecto
const data_source_1 = require("../../data-source"); // Asegúrate de que la instancia de DataSource esté configurada correctamente
class TransaccionController {
    constructor() {
        this.transaccionService = new transaccion_service_1.TransaccionService(data_source_1.AppDataSource);
    }
    crearTransaccion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transaccionData = req.body;
                const nuevaTransaccion = yield this.transaccionService.crearTransaccion(transaccionData);
                return res.status(201).json(nuevaTransaccion);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    obtenerTransacciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transacciones = yield this.transaccionService.obtenerTransacciones();
                return res.status(200).json(transacciones);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    obtenerTransaccion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transaccionID = parseInt(req.params.id);
                const transaccion = yield this.transaccionService.obtenerTransaccionPorId(transaccionID);
                if (!transaccion) {
                    return res.status(404).json({ error: 'Transacción no encontrada' });
                }
                return res.status(200).json(transaccion);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    actualizarTransaccion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transaccionID = parseInt(req.params.id);
                const transaccionData = req.body;
                const transaccionActualizada = yield this.transaccionService.actualizarTransaccion(transaccionID, transaccionData);
                return res.status(200).json(transaccionActualizada);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    eliminarTransaccion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transaccionID = parseInt(req.params.id);
                yield this.transaccionService.eliminarTransaccion(transaccionID);
                return res.status(204).send();
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
}
exports.TransaccionController = TransaccionController;
//# sourceMappingURL=transaccion.controller.js.map