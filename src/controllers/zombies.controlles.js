const zombiesCtrl = {};
const Zombie = require('../models/Zombie');

zombiesCtrl.renderZombiesForm = (req, res) => {
    res.render('zombies/new-zombie');

};

zombiesCtrl.createNewZombie = async(req, res) => {
    const { nombre, email, type } = req.body;
    const newZombie = new Zombie({ nombre, email, type })
    await newZombie.save();

    res.redirect('/zombies')
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
    res.redirect('/zombies');
};

zombiesCtrl.deleteZombie = async(req, res) => {
    await Zombie.findByIdAndDelete(req.params.id);
    res.redirect('/zombies')
};


module.exports = zombiesCtrl;