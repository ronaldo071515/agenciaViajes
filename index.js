/* const express = require('express'); */
import express from 'express';
import db from './config/db.js';
import router from './routes/index.js';


const app = express();

//Conectar la BD
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

//Definir puertp
const port = process.env.PORT || 3000;

//Habilitar PUG
app.set('view engine', 'pug');

//Obtener el año actual
app.use( (req, res, next) => {
    const year = new Date()
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia De Viajes';
    next();
});

//Agregar bodyParser para leer los datos del formulario
app.use( express.urlencoded({extended: true}) )

//definir la carpeta public
app.use(express.static('public'));

//Agregar router
app.use('/', router);


app.listen(port, () => {
    console.log(`Server runing in the port: ${ port }`);
})