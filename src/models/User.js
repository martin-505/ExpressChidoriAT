const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const Usuario = new Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, {
    timestamps: true
});

Usuario.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

Usuario.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

module.exports = model('User', Usuario);