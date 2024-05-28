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
exports.UsuarioController = void 0;
const usuario_service_1 = require("../../services/usuario.service");
const data_source_1 = require("../../data-source");
class UsuarioController {
    constructor() {
        this.usuarioService = new usuario_service_1.UsuarioService(data_source_1.AppDataSource);
    }
    crearUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarioData = req.body;
                const nuevoUsuario = yield this.usuarioService.crearUsuario(usuarioData);
                return res.status(201).json(nuevoUsuario);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    obtenerUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarios = yield this.usuarioService.obtenerUsuarios();
                return res.status(200).json(usuarios);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    obtenerUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarioId = parseInt(req.params.id);
                const usuario = yield this.usuarioService.obtenerUsuarioPorId(usuarioId);
                if (!usuario) {
                    return res.status(404).json({ error: 'Usuario no encontrado' });
                }
                return res.status(200).json(usuario);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    actualizarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarioId = parseInt(req.params.id);
                const usuarioData = req.body;
                const usuarioActualizado = yield this.usuarioService.actualizarUsuario(usuarioId, usuarioData);
                return res.status(200).json(usuarioActualizado);
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
    eliminarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarioId = parseInt(req.params.id);
                yield this.usuarioService.eliminarUsuario(usuarioId);
                return res.status(204).send();
            }
            catch (error) {
                const e = error;
                return res.status(500).json({ error: e.message });
            }
        });
    }
}
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map