const {
    Schema,
    model
} = require('mongoose');

const Zombie = new Schema({
    nombre: {
        type: String,
        required: [true, "Debe de poner el nombre, es obligatorio"],
        minlength: [4, "El nombre es demasiado corto"],
        maxlength: [12, "El nombre es demasiado largo"]
    },
    email: {
        type: String,
        required: [true, "El email es obligatorio"]
    },
    type: {
        type: String,
        enum: ["alumno", "maestro"]
    }
})

module.exports = model('Zombie', Zombie);