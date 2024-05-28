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
exports.AlertasController = void 0;
const Alertas_service_1 = require("../../services/Alertas.service"); // Ajusta la ruta según tu estructura de proyecto
const data_source_1 = require("../../data-source"); // Asegúrate de que la instancia de DataSource esté configurada correctamente
class AlertasController {
    constructor() {
        this.alertasService = new Alertas_service_1.AlertasService(data_source_1.AppDataSource);
    }
    crearAlerta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const alertaData = req.body;
                const nuevaAlerta = yield this.alertasService.crearAlerta(alertaData);
                return res.status(201).json(nuevaAlerta);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    obtenerAlertas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const alertas = yield this.alertasService.obtenerAlertas();
                return res.status(200).json(alertas);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    obtenerAlerta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const alertaID = parseInt(req.params.id);
                const alerta = yield this.alertasService.obtenerAlertaPorId(alertaID);
                if (!alerta) {
                    return res.status(404).json({ error: 'Alerta no encontrada' });
                }
                return res.status(200).json(alerta);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    actualizarAlerta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const alertaID = parseInt(req.params.id);
                const alertaData = req.body;
                const alertaActualizada = yield this.alertasService.actualizarAlerta(alertaID, alertaData);
                return res.status(200).json(alertaActualizada);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    eliminarAlerta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const alertaID = parseInt(req.params.id);
                yield this.alertasService.eliminarAlerta(alertaID);
                return res.status(204).send();
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
}
exports.AlertasController = AlertasController;
//# sourceMappingURL=Alertas.controller.js.map