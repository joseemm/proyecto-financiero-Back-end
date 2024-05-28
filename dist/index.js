"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const usuario_routes_1 = __importDefault(require("./api/routes/usuario.routes"));
const transaccion_routes_1 = __importDefault(require("./api/routes/transaccion.routes"));
const reporte_routes_1 = __importDefault(require("./api/routes/reporte.routes"));
const presupuesto_routes_1 = __importDefault(require("./api/routes/presupuesto.routes"));
const Cuentas_routes_1 = __importDefault(require("./api/routes/Cuentas.routes"));
const CategoriasPersonalizadas_routes_1 = __importDefault(require("./api/routes/CategoriasPersonalizadas.routes"));
const Alertas_routes_1 = __importDefault(require("./api/routes/Alertas.routes"));
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware para parsear el cuerpo de las peticiones
app.use(express_1.default.json());
// Servir archivos estáticos desde la carpeta 'public'
app.use(express_1.default.static(path_1.default.join(__dirname, '../src/public')));
// Define una ruta GET en la raíz para servir el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../src/public', 'index.html'));
});
// Usa las rutas de usuario
app.use('/usuarios', usuario_routes_1.default);
app.use('/api/transacciones', transaccion_routes_1.default);
app.use('/api/reportes', reporte_routes_1.default);
app.use('/api/presupuestos', presupuesto_routes_1.default);
app.use('/api/cuentas', Cuentas_routes_1.default);
app.use('/api/categorias', CategoriasPersonalizadas_routes_1.default);
app.use('/api/alertas', Alertas_routes_1.default);
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map