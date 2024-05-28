"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const usuario_model_1 = require("./models/usuario.model"); // Asegúrate de que la ruta sea correcta
const transaccion_model_1 = require("./models/transaccion.model");
const reporte_model_1 = require("./models/reporte.model");
const presupuesto_model_1 = require("./models/presupuesto.model");
const Cuentas_model_1 = require("./models/Cuentas.model");
const CategoriasPersonalizadas_model_1 = require("./models/CategoriasPersonalizadas.model");
const Alertas_model_1 = require("./models/Alertas.model");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mssql', // Cambiado a 'mssql' para SQL Server
    host: 'localhost',
    port: 1433,
    username: 'SA',
    password: 'TuContraseñaSegura123!',
    database: 'ProyectoFinanciero',
    entities: [
        usuario_model_1.Usuario,
        transaccion_model_1.Transaccion,
        reporte_model_1.Reporte,
        presupuesto_model_1.Presupuesto,
        Cuentas_model_1.Cuenta,
        CategoriasPersonalizadas_model_1.CategoriaPersonalizada,
        Alertas_model_1.Alerta
    ],
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
});
exports.AppDataSource.initialize()
    .then(() => {
    console.log('Data Source has been initialized!');
})
    .catch((err) => {
    console.error('Error during Data Source initialization:', err);
});
//# sourceMappingURL=data-source.js.map