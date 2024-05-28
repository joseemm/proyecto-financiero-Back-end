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
exports.Reporte = void 0;
const typeorm_1 = require("typeorm");
const usuario_model_1 = require("./usuario.model");
let Reporte = class Reporte {
};
exports.Reporte = Reporte;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Reporte.prototype, "reporteID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Reporte.prototype, "usuarioID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'nvarchar', length: 50 }),
    __metadata("design:type", String)
], Reporte.prototype, "tipoReporte", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime2' }),
    __metadata("design:type", Date)
], Reporte.prototype, "fechaGeneracion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'nvarchar' }),
    __metadata("design:type", String)
], Reporte.prototype, "contenido", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_model_1.Usuario),
    (0, typeorm_1.JoinColumn)({ name: 'usuarioID' }),
    __metadata("design:type", usuario_model_1.Usuario)
], Reporte.prototype, "usuario", void 0);
exports.Reporte = Reporte = __decorate([
    (0, typeorm_1.Entity)({ name: 'Reportes' })
], Reporte);
//# sourceMappingURL=reporte.model.js.map