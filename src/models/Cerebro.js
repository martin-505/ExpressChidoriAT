const { Schema, model } = require('mongoose');

const Cerebro = new Schema({
    description: { type: String, required: true },
    flavor: { type: String, required: true },
    price: { type: String, required: true },
    picture: { type: String, required: true }
})

module.exports = model('Cerebro', Cerebro);