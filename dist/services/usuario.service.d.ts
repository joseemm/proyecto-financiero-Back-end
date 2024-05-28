import { DataSource } from 'typeorm';
import { Usuario } from '../models/usuario.model';
export declare class UsuarioService {
    private dataSource;
    private userRepository;
    private logger;
    constructor(dataSource: DataSource);
    crearUsuario(usuarioData: Usuario): Promise<Usuario>;
    obtenerUsuarios(): Promise<Usuario[]>;
    obtenerUsuarioPorId(usuarioID: number): Promise<Usuario | null>;
    actualizarUsuario(usuarioID: number, usuarioData: Partial<Usuario>): Promise<Usuario | null>;
    eliminarUsuario(usuarioID: number): Promise<void>;
}
