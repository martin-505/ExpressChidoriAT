const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const Usuario = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
}, {
    timestamps: true
});

Usuario.methods.encrypPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

Usuario.methods.matchPassword = function(password) {
    return await bcrypt.compare(password, this.password)
}

module.exports = model('User', Usuario);