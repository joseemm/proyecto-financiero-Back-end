import { auth } from 'express-openid-connect';
import { Request, Response, NextFunction } from 'express';

// Configuración de Auth0
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET || 'un_secret_muy_largo_y_aleatorio',
  baseURL: process.env.BASE_URL || 'http://localhost:3000',
  clientID: process.env.CLIENT_ID || 'tu_client_id',
  issuerBaseURL: process.env.ISSUER_BASE_URL || 'https://tu_dominio.auth0.com'
};

// Middleware de Auth0
export const verificarToken = auth(config);

// Middleware para proteger rutas específicas
export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  // Revisa si el usuario está autenticado con Auth0
  if (req.oidc.isAuthenticated()) {
    // Continúa con la siguiente función en la cadena de middlewares
    next();
  } else {
    // Responde con un error si no está autenticado
    res.status(401).json({ error: 'Autorización requerida' });
  }
};
