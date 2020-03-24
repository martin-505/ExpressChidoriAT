const { Router } = require('express');
const router = Router();
const { isAuthenticated } = require('../helpers/auth');

const { renderCerebrosForm, createNewCerebros, renderCerebros, renderEditForm, updatecerebro, deleteCerebro } = require('../controllers/cerebros.controlles');

//New cerebro
router.get('/cerebros/add', isAuthenticated, renderCerebrosForm);

router.post('/cerebros/new-cerebro', isAuthenticated, createNewCerebros);

//Get All cerebros
router.get('/cerebros', isAuthenticated, renderCerebros);

//edit cerebros
router.get('/cerebros/edit/:id', isAuthenticated, renderEditForm);

router.put('/cerebros/edit/:id', isAuthenticated, updatecerebro);

//delete cerebro
router.delete('/cerebros/delete/:id', isAuthenticated, deleteCerebro);


module.exports = router;