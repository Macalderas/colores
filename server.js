const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'dragonball_db'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado a MySQL');
});

// Ruta para obtener personajes
app.get('/personajes', (req, res) => {
  connection.query('SELECT * FROM personajes', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
