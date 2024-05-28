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
exports.ReporteController = void 0;
const reporte_service_1 = require("../../services/reporte.service"); // Ajusta la ruta según tu estructura de proyecto
const data_source_1 = require("../../data-source"); // Asegúrate de que la instancia de DataSource esté configurada correctamente
class ReporteController {
    constructor() {
        this.reporteService = new reporte_service_1.ReporteService(data_source_1.AppDataSource);
    }
    crearReporte(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reporteData = req.body;
                const nuevoReporte = yield this.reporteService.crearReporte(reporteData);
                return res.status(201).json(nuevoReporte);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    obtenerReportes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reportes = yield this.reporteService.obtenerReportes();
                return res.status(200).json(reportes);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    obtenerReporte(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reporteID = parseInt(req.params.id);
                const reporte = yield this.reporteService.obtenerReportePorId(reporteID);
                if (!reporte) {
                    return res.status(404).json({ error: 'Reporte no encontrado' });
                }
                return res.status(200).json(reporte);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    actualizarReporte(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reporteID = parseInt(req.params.id);
                const reporteData = req.body;
                const reporteActualizado = yield this.reporteService.actualizarReporte(reporteID, reporteData);
                return res.status(200).json(reporteActualizado);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    eliminarReporte(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reporteID = parseInt(req.params.id);
                yield this.reporteService.eliminarReporte(reporteID);
                return res.status(204).send();
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
}
exports.ReporteController = ReporteController;
//# sourceMappingURL=reporte.controller.js.map