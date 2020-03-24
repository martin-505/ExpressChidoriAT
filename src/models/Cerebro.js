const { Schema, model } = require('mongoose');

const Cerebro = new Schema({
    description: { type: String, required: [true, "Debe de poner una descripción, es obligatoria"] },
    flavor: { type: String, enum: ["chocolate", "vainilla"] },
    price: { type: String, required: [true, "Debe poner un precio, es obligatorio"] },
    picture: { type: String, required: [true, "Debe poner el nombre de la fotografia, es obligatorio"] }
})

module.exports = model('Cerebro', Cerebro);