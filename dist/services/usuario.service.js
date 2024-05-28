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
exports.UsuarioService = void 0;
const usuario_model_1 = require("../models/usuario.model");
const logger_1 = __importDefault(require("../utils/logger")); // Importación del Logger
class UsuarioService {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.logger = logger_1.default.getInstance(); // Instancia del Logger
        this.userRepository = dataSource.getRepository(usuario_model_1.Usuario);
        this.logger.info('Servicio de usuario inicializado'); // Registro de actividad
    }
    // Crea un nuevo usuario y lo guarda en la base de datos
    crearUsuario(usuarioData) {
        return __awaiter(this, void 0, void 0, function* () {
            const nuevoUsuario = this.userRepository.create(usuarioData);
            yield this.userRepository.save(nuevoUsuario);
            this.logger.info(`Usuario creado: ${nuevoUsuario.usuarioID}`); // Registro de actividad
            return nuevoUsuario;
        });
    }
    // Obtiene todos los usuarios de la base de datos
    obtenerUsuarios() {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield this.userRepository.find();
            this.logger.info('Obtenidos todos los usuarios'); // Registro de actividad
            return usuarios;
        });
    }
    // Obtiene un usuario por su ID
    obtenerUsuarioPorId(usuarioID) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield this.userRepository.findOne({
                where: { usuarioID }
            });
            this.logger.info(`Usuario solicitado: ID ${usuarioID}`); // Registro de actividad
            return usuario;
        });
    }
    // Actualiza un usuario existente y devuelve el usuario actualizado
    actualizarUsuario(usuarioID, usuarioData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userRepository.update(usuarioID, usuarioData);
            const usuarioActualizado = yield this.userRepository.findOne({
                where: { usuarioID }
            });
            this.logger.info(`Usuario actualizado: ID ${usuarioID}`); // Registro de actividad
            return usuarioActualizado;
        });
    }
    // Elimina un usuario por su ID
    eliminarUsuario(usuarioID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userRepository.delete(usuarioID);
            this.logger.info(`Usuario eliminado: ID ${usuarioID}`); // Registro de actividad
        });
    }
}
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map