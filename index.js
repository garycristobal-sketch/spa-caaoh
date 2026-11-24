const mysql = require('mysql');
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Datos de conexión: usa variables de entorno si existen (hosting real),
// y si no, cae en los valores locales de XAMPP (host localhost, usuario root, sin contraseña)
const conexion = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'gcristobal',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    port: process.env.DB_PORT || 3306,
});

conexion.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
    } else {
        console.log('Conectado a la base de datos MySQL (' + (process.env.DB_NAME || 'gcristobal') + ')');
    }
});

app.get('/', (req, res) => {
    res.render('index', { mensaje: null, error: null });
});

app.post('/validar', (req, res) => {
    const { dni, nombres, correo, celular } = req.body;

    if (!dni || !nombres || !correo || !celular) {
        return res.render('index', { mensaje: null, error: 'Por favor completa todos los campos.' });
    }

    const sql = 'INSERT INTO info (dni, nombres, correo, celular, fecha) VALUES (?, ?, ?, ?, NOW())';
    conexion.query(sql, [dni, nombres, correo, celular], (err) => {
        if (err) {
            console.error('Error al guardar el contacto:', err);
            return res.render('index', { mensaje: null, error: 'Hubo un error al guardar tu mensaje. Intenta de nuevo.' });
        }
        res.send(`
            <script>
                alert("Datos enviados correctamente");
                window.location.href = "/";
            </script>
        `);
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});