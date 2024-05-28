"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// database.js
const sql = require('mssql');
const dbConfig = require('./dbconfig');
const getDatos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sql.connect(dbConfig);
        const result = yield sql.query `SELECT * FROM Usuarios`;
        console.log(result);
        return result; // Retorna los datos para ser utilizados por otras partes de tu aplicación.
    }
    catch (err) {
        console.error('Error al conectar a la base de datos:', err);
        throw err; // Lanza el error para manejarlo en una capa superior si es necesario.
    }
});
module.exports = {
    getDatos
};
//# sourceMappingURL=database.js.map