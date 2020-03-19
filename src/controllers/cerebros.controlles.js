const cerebrosCtrl = {};
const Cerebro = require('../models/Cerebro');

cerebrosCtrl.renderCerebrosForm = (req, res) => {
    res.render('cerebros/new-cerebro')
};

cerebrosCtrl.createNewCerebros = async(req, res) => {
    const { description, flavor, price, picture } = req.body;
    const newCerebro = new Cerebro({ description, flavor, price, picture })
    await newCerebro.save();

    res.redirect('/cerebros')
};

cerebrosCtrl.renderCerebros = async(req, res) => {
    const cerebros = await Cerebro.find();
    res.render('cerebros/all-cerebros', { cerebros });
};

cerebrosCtrl.renderEditForm = async(req, res) => {
    const cerebro = await Cerebro.findById(req.params.id);
    res.render('cerebros/edit-cerebro', { cerebro });
};

cerebrosCtrl.updatecerebro = async(req, res) => {
    const { description, flavor, price, picture } = req.body;
    await Cerebro.findByIdAndUpdate(req.params.id, { description, flavor, price, picture });
    res.redirect('/cerebros');
};

cerebrosCtrl.deleteCerebro = async(req, res) => {
    await Cerebro.findByIdAndDelete(req.params.id);
    res.redirect('/cerebros')
};


module.exports = cerebrosCtrl;