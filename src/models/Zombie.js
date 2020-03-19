const { Schema, model } = require('mongoose');

const Zombie = new Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    type: { type: String, required: true }
})

module.exports = model('Zombie', Zombie);