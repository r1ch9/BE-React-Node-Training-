// Usamos la libreria DOTENV para crear variables de entorno. Son variables de entorno, globales que pueden variar dependiendo del env
// dan seguridad. Puede evitar enviarse en un commit para no dar credenciales de admin al commitear cambios
require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Obtencion de datos de entorno
const port = process.env.STATUS === 'development' ? 
    process.env.DEV_PORT : process.env.PROD_PORT;

const MONGO_DB_CONNECTION = process.env.MONGO_DB_CONNECTION;

// Conectando a base de datos
mongoose
  .connect(MONGO_DB_CONNECTION)
  .then((db) => console.log("Conectado a la base de datos!"))
  .catch((err) => console.log("error: ", err));


// RUTAS DE LA APLICACION

// Rutas usuarios
const usuarios = require("./router/usuarios.router"); 
app.use("/usuarios", usuarios);

// Encender servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
