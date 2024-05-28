import { Request, Response } from 'express';
export declare class CategoriasPersonalizadasController {
    private categoriasService;
    constructor();
    crearCategoria(req: Request, res: Response): Promise<Response>;
    obtenerCategorias(req: Request, res: Response): Promise<Response>;
    obtenerCategoria(req: Request, res: Response): Promise<Response>;
    actualizarCategoria(req: Request, res: Response): Promise<Response>;
    eliminarCategoria(req: Request, res: Response): Promise<Response>;
}
