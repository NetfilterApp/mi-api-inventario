const mysql = require('mysql2');

// Configuración de la conexión
const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // En Termux root no suele tener clave
  database: 'mi_app'
});

// Realizar la consulta a tu tabla 'inventario'
conexion.query('SELECT * FROM inventario', (err, filas) => {
  if (err) {
    console.error('Error en la consulta: ', err);
    return;
  }
  console.log('--- PRODUCTOS EN TU APP ---');
  console.table(filas);
  conexion.end();
});