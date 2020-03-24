const cerebrosCtrl = {};
const Cerebro = require('../models/Cerebro');

cerebrosCtrl.renderCerebrosForm = (req, res) => {
    res.render('cerebros/new-cerebro')
};

cerebrosCtrl.createNewCerebros = async(req, res) => {
    const errors = [];
    const {
        description,
        flavor,
        price,
        picture
    } = req.body;
    if (description.length == 0) {
        errors.push({
            text: 'Debe de estar lleno el campo de descripcion'
        });
    }
    if ((flavor.length != 9) && (flavor.length != 8)) {
        errors.push({
            text: 'Debe de poner el sabor chocolate o vainilla'
        });
    }
    if (price.length == 0) {
        errors.push({
            text: 'Debe poner un precio, es obligatorio'
        });
    }
    if (picture.length == 0) {
        errors.push({
            text: 'Debe poner el nombre de la fotografia, es obligatorio'
        });
    }
    if (errors.length > 0) {
        res.render('cerebros/new-cerebro', {
            errors
        })
    } else {
        const newCerebro = new Cerebro({
            description,
            flavor,
            price,
            picture
        })
        await newCerebro.save();
        req.flash('success_mgs', 'Cerebro agregado');
        res.redirect('/cerebros')
    }



};

cerebrosCtrl.renderCerebros = async(req, res) => {
    const cerebros = await Cerebro.find();
    res.render('cerebros/all-cerebros', {
        cerebros
    });
};

cerebrosCtrl.renderEditForm = async(req, res) => {
    const cerebro = await Cerebro.findById(req.params.id);
    res.render('cerebros/edit-cerebro', {
        cerebro
    });
};

cerebrosCtrl.updatecerebro = async(req, res) => {
    const {
        description,
        flavor,
        price,
        picture
    } = req.body;
    await Cerebro.findByIdAndUpdate(req.params.id, {
        description,
        flavor,
        price,
        picture
    });
    req.flash('success_mgs', 'Cerebro Actualizado');
    res.redirect('/cerebros');
};

cerebrosCtrl.deleteCerebro = async(req, res) => {
    await Cerebro.findByIdAndDelete(req.params.id);
    req.flash('success_mgs', 'Cerebro Eliminado');
    res.redirect('/cerebros')
};


module.exports = cerebrosCtrl;