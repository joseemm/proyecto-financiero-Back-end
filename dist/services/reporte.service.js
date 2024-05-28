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
exports.ReporteService = void 0;
const reporte_model_1 = require("../models/reporte.model"); // Ajusta la ruta según tu estructura de proyecto
class ReporteService {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.reporteRepository = dataSource.getRepository(reporte_model_1.Reporte);
    }
    // Crea un nuevo reporte y lo guarda en la base de datos
    crearReporte(reporteData) {
        return __awaiter(this, void 0, void 0, function* () {
            const nuevoReporte = this.reporteRepository.create(reporteData);
            return yield this.reporteRepository.save(nuevoReporte);
        });
    }
    // Obtiene todos los reportes de la base de datos
    obtenerReportes() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.reporteRepository.find();
        });
    }
    // Obtiene un reporte por su ID
    obtenerReportePorId(reporteID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.reporteRepository.findOne({
                where: { reporteID }
            });
        });
    }
    // Actualiza un reporte existente y devuelve el reporte actualizado
    actualizarReporte(reporteID, reporteData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.reporteRepository.update(reporteID, reporteData);
            return yield this.reporteRepository.findOne({
                where: { reporteID }
            });
        });
    }
    // Elimina un reporte por su ID
    eliminarReporte(reporteID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.reporteRepository.delete(reporteID);
        });
    }
}
exports.ReporteService = ReporteService;
//# sourceMappingURL=reporte.service.js.map