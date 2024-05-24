import { DataSource, Repository } from 'typeorm';
import { CategoriaPersonalizada } from '../models/CategoriasPersonalizadas.model'; // Ajusta la ruta según tu estructura de proyecto

export class CategoriasPersonalizadasService {
  private categoriaRepository: Repository<CategoriaPersonalizada>;

  constructor(private dataSource: DataSource) {
    this.categoriaRepository = dataSource.getRepository(CategoriaPersonalizada);
  }

  // Crea una nueva categoría personalizada y la guarda en la base de datos
  public async crearCategoria(categoriaData: CategoriaPersonalizada): Promise<CategoriaPersonalizada> {
    const nuevaCategoria = this.categoriaRepository.create(categoriaData);
    return await this.categoriaRepository.save(nuevaCategoria);
  }

  // Obtiene todas las categorías personalizadas de la base de datos
  public async obtenerCategorias(): Promise<CategoriaPersonalizada[]> {
    return await this.categoriaRepository.find();
  }

  // Obtiene una categoría personalizada por su ID
  public async obtenerCategoriaPorId(categoriaID: number): Promise<CategoriaPersonalizada | null> {
    return await this.categoriaRepository.findOne({
      where: { categoriaID }
    });
  }

  // Actualiza una categoría personalizada existente y devuelve la categoría actualizada
  public async actualizarCategoria(categoriaID: number, categoriaData: Partial<CategoriaPersonalizada>): Promise<CategoriaPersonalizada | null> {
    await this.categoriaRepository.update(categoriaID, categoriaData);
    return await this.categoriaRepository.findOne({
      where: { categoriaID }
    });
  }

  // Elimina una categoría personalizada por su ID
  public async eliminarCategoria(categoriaID: number): Promise<void> {
    await this.categoriaRepository.delete(categoriaID);
  }
}
