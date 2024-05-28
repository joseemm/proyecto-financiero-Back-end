"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaccion = void 0;
const typeorm_1 = require("typeorm");
const CategoriasPersonalizadas_model_1 = require("./CategoriasPersonalizadas.model");
const Cuentas_model_1 = require("./Cuentas.model");
const logger_1 = __importDefault(require("../utils/logger")); // Importación del Logger
let Transaccion = class Transaccion {
    constructor() {
        this.logger = logger_1.default.getInstance(); // Instancia del Logger
    }
    // Método para registrar la creación de una transacción
    registrarCreacion() {
        this.logger.info(`Transacción creada: ID ${this.transaccionID}, monto: ${this.monto}`);
    }
};
exports.Transaccion = Transaccion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Transaccion.prototype, "transaccionID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Transaccion.prototype, "cuentaID", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Transaccion.prototype, "categoriaID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'nvarchar', length: 50 }),
    __metadata("design:type", String)
], Transaccion.prototype, "tipoTransaccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 18, scale: 2 }),
    __metadata("design:type", Number)
], Transaccion.prototype, "monto", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime2' }),
    __metadata("design:type", Date)
], Transaccion.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'nvarchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Transaccion.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Cuentas_model_1.Cuenta),
    (0, typeorm_1.JoinColumn)({ name: 'cuentaID' }),
    __metadata("design:type", Cuentas_model_1.Cuenta)
], Transaccion.prototype, "cuenta", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CategoriasPersonalizadas_model_1.CategoriaPersonalizada, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'categoriaID' }),
    __metadata("design:type", CategoriasPersonalizadas_model_1.CategoriaPersonalizada)
], Transaccion.prototype, "categoriaPersonalizada", void 0);
exports.Transaccion = Transaccion = __decorate([
    (0, typeorm_1.Entity)({ name: 'Transacciones' })
], Transaccion);
//# sourceMappingURL=transaccion.model.js.map