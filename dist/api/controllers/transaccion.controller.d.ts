import { Request, Response } from 'express';
export declare class TransaccionController {
    private transaccionService;
    constructor();
    crearTransaccion(req: Request, res: Response): Promise<Response>;
    obtenerTransacciones(req: Request, res: Response): Promise<Response>;
    obtenerTransaccion(req: Request, res: Response): Promise<Response>;
    actualizarTransaccion(req: Request, res: Response): Promise<Response>;
    eliminarTransaccion(req: Request, res: Response): Promise<Response>;
}
