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
exports.Usuario = void 0;
const typeorm_1 = require("typeorm");
const logger_1 = __importDefault(require("../utils/logger"));
let Usuario = class Usuario {
    constructor() {
        logger_1.default.getInstance().info(`Se ha creado una instancia de Usuario con el email: ${this.email}`);
    }
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Usuario.prototype, "usuarioID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'nvarchar', length: 100 }),
    __metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'nvarchar', length: 100, unique: true }),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'nvarchar', length: 100 }),
    __metadata("design:type", String)
], Usuario.prototype, "contrase\u00F1a", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'datetime2' }),
    __metadata("design:type", Date)
], Usuario.prototype, "fechaCreacion", void 0);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)({ name: 'Usuarios' }),
    __metadata("design:paramtypes", [])
], Usuario);
//# sourceMappingURL=usuario.model.js.map