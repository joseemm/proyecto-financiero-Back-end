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
exports.CuentasController = void 0;
const Cuentas_service_1 = require("../../services/Cuentas.service"); // Ajusta la ruta según tu estructura de proyecto
const data_source_1 = require("../../data-source"); // Asegúrate de que la instancia de DataSource esté configurada correctamente
class CuentasController {
    constructor() {
        this.cuentasService = new Cuentas_service_1.CuentasService(data_source_1.AppDataSource);
    }
    crearCuenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cuentaData = req.body;
                const nuevaCuenta = yield this.cuentasService.crearCuenta(cuentaData);
                return res.status(201).json(nuevaCuenta);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    obtenerCuentas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cuentas = yield this.cuentasService.obtenerCuentas();
                return res.status(200).json(cuentas);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    obtenerCuenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cuentaID = parseInt(req.params.id);
                const cuenta = yield this.cuentasService.obtenerCuentaPorId(cuentaID);
                if (!cuenta) {
                    return res.status(404).json({ error: 'Cuenta no encontrada' });
                }
                return res.status(200).json(cuenta);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    actualizarCuenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cuentaID = parseInt(req.params.id);
                const cuentaData = req.body;
                const cuentaActualizada = yield this.cuentasService.actualizarCuenta(cuentaID, cuentaData);
                return res.status(200).json(cuentaActualizada);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    eliminarCuenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cuentaID = parseInt(req.params.id);
                yield this.cuentasService.eliminarCuenta(cuentaID);
                return res.status(204).send();
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
}
exports.CuentasController = CuentasController;
//# sourceMappingURL=Cuentas.controller.js.map