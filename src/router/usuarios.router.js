const express = require('express');
const usuarios = express.Router();

const usuariosModel = require('../models/usuarios.model')

usuarios.get('/getAllUsers', async (req, res) => {
    const data = await usuariosModel.find({});
    res.status(200).json({
        msg: 'Funciona!',
        data
    })
});

usuarios.post('/addNewUser', async (req, res) => {
    const usuario = new usuariosModel({
        userId: 'Richard',
        password: '123123'
    });

    usuario.save();

    res.status(200).json({
        msg: 'Nuevo usuario guardado correctamente!',
        usuario
    })
});

module.exports = usuarios;