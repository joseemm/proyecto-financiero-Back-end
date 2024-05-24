import express, { Request, Response } from 'express';
import usuarioRoutes from './api/routes/usuario.routes'; // Asegúrate de que la ruta sea correcta
import transaccionRoutes from './api/routes/transaccion.routes'; // Ajusta la ruta según tu estructura de proyecto
import reporteRoutes from './api/routes/reporte.routes'; // Ajusta la ruta según tu estructura de proyecto
import presupuestoRoutes from './api/routes/presupuesto.routes'; // Ajusta la ruta según tu estructura de proyecto
import cuentasRoutes from './api/routes/Cuentas.routes'; // Ajusta la ruta según tu estructura de proyecto
import categoriasRoutes from './api/routes/CategoriasPersonalizadas.routes'; // Ajusta la ruta según tu estructura de proyecto
import alertasRoutes from './api/routes/Alertas.routes'; // Ajusta la ruta según tu estructura de proyecto
import { verificarToken, checkJwt } from './api/middlewares/autenticacion.middleware'; // Asegúrate de que la ruta sea correcta


// Crea una nueva aplicación de Express
const app = express();

// Middleware para parsear el cuerpo de las peticiones
app.use(express.json());



// Define una ruta GET en la raíz
app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola Mundo con TypeScript!');
});

// Usa las rutas de usuario
app.use('/usuarios', usuarioRoutes);

app.use('/api/transacciones', transaccionRoutes);

app.use('/api/reportes', reporteRoutes);

app.use('/api/presupuestos', presupuestoRoutes);

app.use('/api/cuentas', cuentasRoutes);

app.use('/api/categorias', categoriasRoutes);

app.use('/api/alertas', alertasRoutes);

// Inicia el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
