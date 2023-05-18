const mongoose = require('mongoose');

const {
    Schema
} = mongoose;

const usuariosModel = new Schema({
    userId: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: ['El email es obligatorio', true]
    }
});

module.exports = mongoose.model('user', usuariosModel);