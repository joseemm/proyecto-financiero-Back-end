import { DataSource, Repository } from 'typeorm';
import { Usuario } from '../models/usuario.model';
import Logger from '../utils/logger'; // Importación del Logger

export class UsuarioService {
  private userRepository: Repository<Usuario>;
  private logger = Logger.getInstance(); // Instancia del Logger

  constructor(private dataSource: DataSource) {
    this.userRepository = dataSource.getRepository(Usuario);
    this.logger.info('Servicio de usuario inicializado'); // Registro de actividad
  }

  // Crea un nuevo usuario y lo guarda en la base de datos
  public async crearUsuario(usuarioData: Usuario): Promise<Usuario> {
    const nuevoUsuario = this.userRepository.create(usuarioData);
    await this.userRepository.save(nuevoUsuario);
    this.logger.info(`Usuario creado: ${nuevoUsuario.usuarioID}`); // Registro de actividad
    return nuevoUsuario;
  }

  // Obtiene todos los usuarios de la base de datos
  public async obtenerUsuarios(): Promise<Usuario[]> {
    const usuarios = await this.userRepository.find();
    this.logger.info('Obtenidos todos los usuarios'); // Registro de actividad
    return usuarios;
  }

  // Obtiene un usuario por su ID
  public async obtenerUsuarioPorId(usuarioID: number): Promise<Usuario | null> {
    const usuario = await this.userRepository.findOne({
      where: { usuarioID }
    });
    this.logger.info(`Usuario solicitado: ID ${usuarioID}`); // Registro de actividad
    return usuario;
  }
  
  // Actualiza un usuario existente y devuelve el usuario actualizado
  public async actualizarUsuario(usuarioID: number, usuarioData: Partial<Usuario>): Promise<Usuario | null> {
    await this.userRepository.update(usuarioID, usuarioData);
    const usuarioActualizado = await this.userRepository.findOne({
      where: { usuarioID }
    });
    this.logger.info(`Usuario actualizado: ID ${usuarioID}`); // Registro de actividad
    return usuarioActualizado;
  }

  // Elimina un usuario por su ID
  public async eliminarUsuario(usuarioID: number): Promise<void> {
    await this.userRepository.delete(usuarioID);
    this.logger.info(`Usuario eliminado: ID ${usuarioID}`); // Registro de actividad
  }
}
