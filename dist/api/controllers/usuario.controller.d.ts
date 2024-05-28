import { Request, Response } from 'express';
export declare class UsuarioController {
    private usuarioService;
    constructor();
    crearUsuario(req: Request, res: Response): Promise<Response>;
    obtenerUsuarios(req: Request, res: Response): Promise<Response>;
    obtenerUsuario(req: Request, res: Response): Promise<Response>;
    actualizarUsuario(req: Request, res: Response): Promise<Response>;
    eliminarUsuario(req: Request, res: Response): Promise<Response>;
}
