import { DataSource } from 'typeorm';
import { CategoriaPersonalizada } from '../models/CategoriasPersonalizadas.model';
export declare class CategoriasPersonalizadasService {
    private dataSource;
    private categoriaRepository;
    constructor(dataSource: DataSource);
    crearCategoria(categoriaData: CategoriaPersonalizada): Promise<CategoriaPersonalizada>;
    obtenerCategorias(): Promise<CategoriaPersonalizada[]>;
    obtenerCategoriaPorId(categoriaID: number): Promise<CategoriaPersonalizada | null>;
    actualizarCategoria(categoriaID: number, categoriaData: Partial<CategoriaPersonalizada>): Promise<CategoriaPersonalizada | null>;
    eliminarCategoria(categoriaID: number): Promise<void>;
}
