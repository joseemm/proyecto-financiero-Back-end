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
exports.CategoriaPersonalizada = void 0;
const typeorm_1 = require("typeorm");
const usuario_model_1 = require("./usuario.model");
let CategoriaPersonalizada = class CategoriaPersonalizada {
};
exports.CategoriaPersonalizada = CategoriaPersonalizada;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CategoriaPersonalizada.prototype, "categoriaID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CategoriaPersonalizada.prototype, "usuarioID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'nvarchar', length: 100 }),
    __metadata("design:type", String)
], CategoriaPersonalizada.prototype, "nombreCategoria", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'nvarchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CategoriaPersonalizada.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_model_1.Usuario),
    (0, typeorm_1.JoinColumn)({ name: 'usuarioID' }),
    __metadata("design:type", usuario_model_1.Usuario)
], CategoriaPersonalizada.prototype, "usuario", void 0);
exports.CategoriaPersonalizada = CategoriaPersonalizada = __decorate([
    (0, typeorm_1.Entity)({ name: 'CategoriasPersonalizadas' })
], CategoriaPersonalizada);
//# sourceMappingURL=CategoriasPersonalizadas.model.js.map