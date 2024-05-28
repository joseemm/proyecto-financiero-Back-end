import { Request, Response } from 'express';
export declare class CuentasController {
    private cuentasService;
    constructor();
    crearCuenta(req: Request, res: Response): Promise<Response>;
    obtenerCuentas(req: Request, res: Response): Promise<Response>;
    obtenerCuenta(req: Request, res: Response): Promise<Response>;
    actualizarCuenta(req: Request, res: Response): Promise<Response>;
    eliminarCuenta(req: Request, res: Response): Promise<Response>;
}
