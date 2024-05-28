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
const typeorm_1 = require("typeorm");
const usuario_model_1 = require("../models/usuario.model");
const usuario_service_1 = require("../services/usuario.service"); // Ajusta la ruta según tu estructura de proyecto
jest.mock('typeorm');
describe('UsuarioService', () => {
    let usuarioService;
    let usuarioRepository;
    const datosDePrueba = {
        usuarioID: 1,
        nombre: 'NombreUsuario1',
        email: 'email1@ejemplo.com',
        contraseña: 'ContraseñaSegura1',
        fechaCreacion: new Date('2024-05-14T17:21:39.920Z')
    };
    beforeEach(() => {
        const dataSource = new typeorm_1.DataSource({}); // Mock DataSource, ajusta la configuración si es necesario
        usuarioRepository = dataSource.getRepository(usuario_model_1.Usuario);
        jest.spyOn(dataSource, 'getRepository').mockReturnValue({
            create: jest.fn().mockImplementation((usuario) => usuario),
            save: jest.fn().mockResolvedValue(Object.assign(Object.assign({}, datosDePrueba), { usuarioID: 1 }))
        });
        usuarioService = new usuario_service_1.UsuarioService(dataSource);
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('debe crear una instancia de Usuario con los datos proporcionados y guardarla en la base de datos', () => __awaiter(void 0, void 0, void 0, function* () {
        // Crear instancia de Usuario con datos de prueba
        const usuario = usuarioRepository.create(datosDePrueba);
        // Guardar la instancia en la base de datos (simulado)
        const usuarioGuardado = yield usuarioService.crearUsuario(usuario);
        // Verificar que la instancia de Usuario tiene los datos correctos
        expect(usuario).toBeDefined();
        expect(usuario.usuarioID).toBe(datosDePrueba.usuarioID);
        expect(usuario.nombre).toBe(datosDePrueba.nombre);
        expect(usuario.email).toBe(datosDePrueba.email);
        expect(usuario.contraseña).toBe(datosDePrueba.contraseña);
        expect(usuario.fechaCreacion).toEqual(datosDePrueba.fechaCreacion);
        // Verificar que el método save fue llamado correctamente
        expect(usuarioRepository.save).toHaveBeenCalledWith(usuario);
        // Verificar que el usuario guardado tiene un ID (simulado)
        expect(usuarioGuardado.usuarioID).toBeDefined();
    }));
    // Agrega más pruebas para cubrir otros casos de uso o validaciones
});
//# sourceMappingURL=usuario.test.js.map