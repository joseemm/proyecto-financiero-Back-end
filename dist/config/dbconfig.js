"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// dbconfig.ts
const logger_1 = __importDefault(require("../utils/logger")); // Asegúrate de que la ruta al archivo logger.ts sea correcta
const sql = __importStar(require("mssql"));
exports.config = {
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
const logger = logger_1.default.getInstance(); // Obtiene la instancia de Logger
sql.connect(exports.config).then(() => {
    logger.info('Conexión exitosa a la base de datos.'); // Registra un mensaje informativo
}).catch(err => {
    logger.error('Error al conectar a la base de datos:', err); // Registra un mensaje de error
});
//# sourceMappingURL=dbconfig.js.map