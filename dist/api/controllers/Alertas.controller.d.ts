import { Request, Response } from 'express';
export declare class AlertasController {
    private alertasService;
    constructor();
    crearAlerta(req: Request, res: Response): Promise<Response>;
    obtenerAlertas(req: Request, res: Response): Promise<Response>;
    obtenerAlerta(req: Request, res: Response): Promise<Response>;
    actualizarAlerta(req: Request, res: Response): Promise<Response>;
    eliminarAlerta(req: Request, res: Response): Promise<Response>;
}
