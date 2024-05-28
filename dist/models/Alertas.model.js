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
exports.Alerta = void 0;
const typeorm_1 = require("typeorm");
const usuario_model_1 = require("./usuario.model");
let Alerta = class Alerta {
};
exports.Alerta = Alerta;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Alerta.prototype, "alertaID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Alerta.prototype, "usuarioID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'nvarchar', length: 50 }),
    __metadata("design:type", String)
], Alerta.prototype, "tipoAlerta", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 18, scale: 2 }),
    __metadata("design:type", Number)
], Alerta.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bit' }),
    __metadata("design:type", Boolean)
], Alerta.prototype, "activa", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'nvarchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Alerta.prototype, "mensaje", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_model_1.Usuario),
    (0, typeorm_1.JoinColumn)({ name: 'usuarioID' }),
    __metadata("design:type", usuario_model_1.Usuario)
], Alerta.prototype, "usuario", void 0);
exports.Alerta = Alerta = __decorate([
    (0, typeorm_1.Entity)({ name: 'Alertas' })
], Alerta);
//# sourceMappingURL=Alertas.model.js.map