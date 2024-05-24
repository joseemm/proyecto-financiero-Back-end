import { Request, Response } from 'express';
import { CategoriasPersonalizadasService } from '../../services/CategoriasPersonalizadas.service'; // Ajusta la ruta según tu estructura de proyecto
import { CategoriaPersonalizada } from '../../models/CategoriasPersonalizadas.model';
import { AppDataSource } from '../../data-source'; // Asegúrate de que la instancia de DataSource esté configurada correctamente

export class CategoriasPersonalizadasController {
  private categoriasService: CategoriasPersonalizadasService;

  constructor() {
    this.categoriasService = new CategoriasPersonalizadasService(AppDataSource);
  }

  public async crearCategoria(req: Request, res: Response): Promise<Response> {
    try {
      const categoriaData: CategoriaPersonalizada = req.body;
      const nuevaCategoria = await this.categoriasService.crearCategoria(categoriaData);
      return res.status(201).json(nuevaCategoria);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async obtenerCategorias(req: Request, res: Response): Promise<Response> {
    try {
      const categorias = await this.categoriasService.obtenerCategorias();
      return res.status(200).json(categorias);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async obtenerCategoria(req: Request, res: Response): Promise<Response> {
    try {
      const categoriaID = parseInt(req.params.id);
      const categoria = await this.categoriasService.obtenerCategoriaPorId(categoriaID);
      if (!categoria) {
        return res.status(404).json({ error: 'Categoría no encontrada' });
      }
      return res.status(200).json(categoria);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async actualizarCategoria(req: Request, res: Response): Promise<Response> {
    try {
      const categoriaID = parseInt(req.params.id);
      const categoriaData: Partial<CategoriaPersonalizada> = req.body;
      const categoriaActualizada = await this.categoriasService.actualizarCategoria(categoriaID, categoriaData);
      return res.status(200).json(categoriaActualizada);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async eliminarCategoria(req: Request, res: Response): Promise<Response> {
    try {
      const categoriaID = parseInt(req.params.id);
      await this.categoriasService.eliminarCategoria(categoriaID);
      return res.status(204).send();
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }
}
