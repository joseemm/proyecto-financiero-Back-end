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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransaccionService = void 0;
const transaccion_model_1 = require("../models/transaccion.model"); // Ajusta la ruta según tu estructura de proyecto
const logger_1 = __importDefault(require("../utils/logger")); // Importación del Logger
class TransaccionService {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.logger = logger_1.default.getInstance(); // Instancia del Logger
        this.transaccionRepository = dataSource.getRepository(transaccion_model_1.Transaccion);
        this.logger.info('Servicio de Transacción inicializado'); // Registro de actividad
    }
    // Crea una nueva transacción y la guarda en la base de datos
    crearTransaccion(transaccionData) {
        return __awaiter(this, void 0, void 0, function* () {
            const nuevaTransaccion = this.transaccionRepository.create(transaccionData);
            yield this.transaccionRepository.save(nuevaTransaccion);
            this.logger.info(`Transacción creada: ${nuevaTransaccion.transaccionID}`); // Registro de actividad
            return nuevaTransaccion;
        });
    }
    // Obtiene todas las transacciones de la base de datos
    obtenerTransacciones() {
        return __awaiter(this, void 0, void 0, function* () {
            const transacciones = yield this.transaccionRepository.find();
            this.logger.info('Obtenidas todas las transacciones'); // Registro de actividad
            return transacciones;
        });
    }
    // Obtiene una transacción por su ID
    obtenerTransaccionPorId(transaccionID) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaccion = yield this.transaccionRepository.findOne({
                where: { transaccionID }
            });
            this.logger.info(`Transacción solicitada: ID ${transaccionID}`); // Registro de actividad
            return transaccion;
        });
    }
    // Actualiza una transacción existente y devuelve la transacción actualizada
    actualizarTransaccion(transaccionID, transaccionData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.transaccionRepository.update(transaccionID, transaccionData);
            const transaccionActualizada = yield this.transaccionRepository.findOne({
                where: { transaccionID }
            });
            this.logger.info(`Transacción actualizada: ID ${transaccionID}`); // Registro de actividad
            return transaccionActualizada;
        });
    }
    // Elimina una transacción por su ID
    eliminarTransaccion(transaccionID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.transaccionRepository.delete(transaccionID);
            this.logger.info(`Transacción eliminada: ID ${transaccionID}`); // Registro de actividad
        });
    }
}
exports.TransaccionService = TransaccionService;
//# sourceMappingURL=transaccion.service.js.map