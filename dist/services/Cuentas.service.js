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
exports.CuentasService = void 0;
const Cuentas_model_1 = require("../models/Cuentas.model"); // Ajusta la ruta según tu estructura de proyecto
class CuentasService {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.cuentaRepository = dataSource.getRepository(Cuentas_model_1.Cuenta);
    }
    // Crea una nueva cuenta y la guarda en la base de datos
    crearCuenta(cuentaData) {
        return __awaiter(this, void 0, void 0, function* () {
            const nuevaCuenta = this.cuentaRepository.create(cuentaData);
            return yield this.cuentaRepository.save(nuevaCuenta);
        });
    }
    // Obtiene todas las cuentas de la base de datos
    obtenerCuentas() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.cuentaRepository.find();
        });
    }
    // Obtiene una cuenta por su ID
    obtenerCuentaPorId(cuentaID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.cuentaRepository.findOne({
                where: { cuentaID }
            });
        });
    }
    // Actualiza una cuenta existente y devuelve la cuenta actualizada
    actualizarCuenta(cuentaID, cuentaData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.cuentaRepository.update(cuentaID, cuentaData);
            return yield this.cuentaRepository.findOne({
                where: { cuentaID }
            });
        });
    }
    // Elimina una cuenta por su ID
    eliminarCuenta(cuentaID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.cuentaRepository.delete(cuentaID);
        });
    }
}
exports.CuentasService = CuentasService;
//# sourceMappingURL=Cuentas.service.js.map