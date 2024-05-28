import { Request, Response } from 'express';
export declare class ReporteController {
    private reporteService;
    constructor();
    crearReporte(req: Request, res: Response): Promise<Response>;
    obtenerReportes(req: Request, res: Response): Promise<Response>;
    obtenerReporte(req: Request, res: Response): Promise<Response>;
    actualizarReporte(req: Request, res: Response): Promise<Response>;
    eliminarReporte(req: Request, res: Response): Promise<Response>;
}
