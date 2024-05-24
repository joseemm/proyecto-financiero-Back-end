import { DataSource, Repository } from 'typeorm';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/usuario.service'; // Ajusta la ruta según tu estructura de proyecto

jest.mock('typeorm');

describe('UsuarioService', () => {
  let usuarioService: UsuarioService;
  let usuarioRepository: Repository<Usuario>;

  const datosDePrueba = {
    usuarioID: 1,
    nombre: 'NombreUsuario1',
    email: 'email1@ejemplo.com',
    contraseña: 'ContraseñaSegura1',
    fechaCreacion: new Date('2024-05-14T17:21:39.920Z')
  };

  beforeEach(() => {
    const dataSource = new DataSource({} as any); // Mock DataSource, ajusta la configuración si es necesario
    usuarioRepository = dataSource.getRepository(Usuario);

    jest.spyOn(dataSource, 'getRepository').mockReturnValue({
      create: jest.fn().mockImplementation((usuario) => usuario),
      save: jest.fn().mockResolvedValue({ ...datosDePrueba, usuarioID: 1 })
    } as unknown as Repository<Usuario>);

    usuarioService = new UsuarioService(dataSource);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('debe crear una instancia de Usuario con los datos proporcionados y guardarla en la base de datos', async () => {
    // Crear instancia de Usuario con datos de prueba
    const usuario = usuarioRepository.create(datosDePrueba);

    // Guardar la instancia en la base de datos (simulado)
    const usuarioGuardado = await usuarioService.crearUsuario(usuario);

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
  });

  // Agrega más pruebas para cubrir otros casos de uso o validaciones
});
