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
exports.AlertasService = void 0;
const Alertas_model_1 = require("../models/Alertas.model"); // Ajusta la ruta según tu estructura de proyecto
class AlertasService {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.alertaRepository = dataSource.getRepository(Alertas_model_1.Alerta);
    }
    // Crea una nueva alerta y la guarda en la base de datos
    crearAlerta(alertaData) {
        return __awaiter(this, void 0, void 0, function* () {
            const nuevaAlerta = this.alertaRepository.create(alertaData);
            return yield this.alertaRepository.save(nuevaAlerta);
        });
    }
    // Obtiene todas las alertas de la base de datos
    obtenerAlertas() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.alertaRepository.find();
        });
    }
    // Obtiene una alerta por su ID
    obtenerAlertaPorId(alertaID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.alertaRepository.findOne({
                where: { alertaID }
            });
        });
    }
    // Actualiza una alerta existente y devuelve la alerta actualizada
    actualizarAlerta(alertaID, alertaData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.alertaRepository.update(alertaID, alertaData);
            return yield this.alertaRepository.findOne({
                where: { alertaID }
            });
        });
    }
    // Elimina una alerta por su ID
    eliminarAlerta(alertaID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.alertaRepository.delete(alertaID);
        });
    }
}
exports.AlertasService = AlertasService;
//# sourceMappingURL=Alertas.service.js.map