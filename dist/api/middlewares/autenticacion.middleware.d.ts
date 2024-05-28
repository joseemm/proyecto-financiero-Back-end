import { Request, Response, NextFunction } from 'express';
export declare const verificarToken: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const checkJwt: (req: Request, res: Response, next: NextFunction) => void;
