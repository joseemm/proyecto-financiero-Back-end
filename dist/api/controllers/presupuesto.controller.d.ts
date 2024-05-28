import { Request, Response } from 'express';
export declare class PresupuestoController {
    private presupuestoService;
    constructor();
    crearPresupuesto(req: Request, res: Response): Promise<Response>;
    obtenerPresupuestos(req: Request, res: Response): Promise<Response>;
    obtenerPresupuesto(req: Request, res: Response): Promise<Response>;
    actualizarPresupuesto(req: Request, res: Response): Promise<Response>;
    eliminarPresupuesto(req: Request, res: Response): Promise<Response>;
}
