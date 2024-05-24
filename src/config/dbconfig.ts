// dbconfig.ts
import Logger from "../utils/logger"; // Asegúrate de que la ruta al archivo logger.ts sea correcta

import * as sql from 'mssql';

export const config: sql.config = {
    user: 'SA',
    password: 'TuContraseñaSegura123!',
    server: 'localhost', // Usa solo localhost sin el puerto aquí
    database: 'ProyectoFinanciero',
    options: {
        port: 1433, // Especifica el puerto aquí si es necesario
        encrypt: true,
        trustServerCertificate: true
    }
};

const logger = Logger.getInstance(); // Obtiene la instancia de Logger

sql.connect(config).then(() => {
    logger.info('Conexión exitosa a la base de datos.'); // Registra un mensaje informativo
}).catch(err => {
    logger.error('Error al conectar a la base de datos:', err); // Registra un mensaje de error
});
