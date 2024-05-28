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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presupuesto = void 0;
const typeorm_1 = require("typeorm");
const usuario_model_1 = require("./usuario.model");
let Presupuesto = class Presupuesto {
};
exports.Presupuesto = Presupuesto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Presupuesto.prototype, "presupuestoID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Presupuesto.prototype, "usuarioID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'nvarchar', length: 100 }),
    __metadata("design:type", String)
], Presupuesto.prototype, "nombrePresupuesto", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 18, scale: 2 }),
    __metadata("design:type", Number)
], Presupuesto.prototype, "monto", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime2' }),
    __metadata("design:type", Date)
], Presupuesto.prototype, "fechaInicio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime2' }),
    __metadata("design:type", Date)
], Presupuesto.prototype, "fechaFin", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_model_1.Usuario),
    (0, typeorm_1.JoinColumn)({ name: 'usuarioID' }),
    __metadata("design:type", usuario_model_1.Usuario)
], Presupuesto.prototype, "usuario", void 0);
exports.Presupuesto = Presupuesto = __decorate([
    (0, typeorm_1.Entity)({ name: 'Presupuestos' })
], Presupuesto);
//# sourceMappingURL=presupuesto.model.js.map