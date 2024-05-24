// database.js
const sql = require('mssql');
const dbConfig = require('./dbconfig');

const getDatos = async () => {
  try {
    await sql.connect(dbConfig);
    const result = await sql.query`SELECT * FROM Usuarios`;
    console.log(result);
    return result; // Retorna los datos para ser utilizados por otras partes de tu aplicación.
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err);
    throw err; // Lanza el error para manejarlo en una capa superior si es necesario.
  }
};

module.exports = {
  getDatos
};
