import express, { Request, Response } from 'express';
import path from 'path';
import usuarioRoutes from './api/routes/usuario.routes';
import transaccionRoutes from './api/routes/transaccion.routes';
import reporteRoutes from './api/routes/reporte.routes';
import presupuestoRoutes from './api/routes/presupuesto.routes';
import cuentasRoutes from './api/routes/Cuentas.routes';
import categoriasRoutes from './api/routes/CategoriasPersonalizadas.routes';
import alertasRoutes from './api/routes/Alertas.routes';

const app = express();
const PORT = 3000;

// Middleware para parsear el cuerpo de las peticiones
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, '../src/public')));

// Define una ruta GET en la raíz para servir el archivo index.html
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../src/public', 'index.html'));
});

// Usa las rutas de usuario
app.use('/usuarios', usuarioRoutes);
app.use('/api/transacciones', transaccionRoutes);
app.use('/api/reportes', reporteRoutes);
app.use('/api/presupuestos', presupuestoRoutes);
app.use('/api/cuentas', cuentasRoutes);
app.use('/api/categorias', categoriasRoutes);
app.use('/api/alertas', alertasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
