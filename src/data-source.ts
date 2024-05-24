import { DataSource } from 'typeorm';
import { Usuario } from './models/usuario.model'; // Asegúrate de que la ruta sea correcta
import { Transaccion } from './models/transaccion.model';
import { Reporte } from './models/reporte.model';
import { Presupuesto } from './models/presupuesto.model';
import { Cuenta } from './models/Cuentas.model';
import { CategoriaPersonalizada } from './models/CategoriasPersonalizadas.model';
import { Alerta } from './models/Alertas.model';

export const AppDataSource = new DataSource({
  type: 'mssql', // Cambiado a 'mssql' para SQL Server
  host: 'localhost',
  port: 1433,
  username: 'SA',
  password: 'TuContraseñaSegura123!',
  database: 'ProyectoFinanciero',
  entities: [
    Usuario,
    Transaccion,
    Reporte,
    Presupuesto,
    Cuenta,
    CategoriaPersonalizada,
    Alerta
  ],
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });
