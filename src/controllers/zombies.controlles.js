const zombiesCtrl = {};
const Zombie = require('../models/Zombie');

zombiesCtrl.renderZombiesForm = (req, res) => {
    res.render('zombies/new-zombie');

};

zombiesCtrl.createNewZombie = async(req, res) => {
    const errors = [];
    const { nombre, email, type } = req.body;
    if (nombre.length < 0) {
        errors.push({ text: 'Debe de estar lleno el campo de nombre' });
    }
    if (nombre.length < 4) {
        errors.push({ text: 'El nombre debe de ser mayor a 4 caracteres' });
    }
    if (nombre.length > 12) {
        errors.push({ text: 'El nombre debe de ser menor a 12 caracteres' });
    }
    if (email.length == 0) {
        errors.push({ text: 'El email es obligatorio' });
    }
    if ((type.length != 6) && (type.length != 7)) {
        errors.push({ text: 'en el campo tipo debe de poner si usted es alumno o maestro' });
    }

    if (errors.length > 0) {
        res.render('zombies/new-zombie', {
            errors
        })
    } else {
        const newZombie = new Zombie({ nombre, email, type })
        await newZombie.save();
        req.flash('success_mgs', 'Zombie agregado');
        res.redirect('/zombies');
    }
};

zombiesCtrl.renderZombies = async(req, res) => {
    const zombies = await Zombie.find();
    res.render('zombies/all-zombies', { zombies });


};

zombiesCtrl.renderEditForm = async(req, res) => {
    const zombie = await Zombie.findById(req.params.id);
    res.render('zombies/edit-zombie', { zombie });
};

zombiesCtrl.updateZombie = async(req, res) => {
    const { nombre, email, type } = req.body;
    await Zombie.findByIdAndUpdate(req.params.id, { nombre, email, type });
    req.flash('success_mgs', 'Zombie Actualizado');
    res.redirect('/zombies');
};

zombiesCtrl.deleteZombie = async(req, res) => {
    await Zombie.findByIdAndDelete(req.params.id);
    req.flash('success_mgs', 'Zombie eliminado');
    res.redirect('/zombies')
};


module.exports = zombiesCtrl;