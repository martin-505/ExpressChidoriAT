const { Router } = require('express');
const router = Router();


const { renderCerebrosForm, createNewCerebros, renderCerebros, renderEditForm, updatecerebro, deleteCerebro } = require('../controllers/cerebros.controlles');

//New cerebro
router.get('/cerebros/add', renderCerebrosForm);

router.post('/cerebros/new-cerebro', createNewCerebros);

//Get All cerebros
router.get('/cerebros', renderCerebros);

//edit cerebros
router.get('/cerebros/edit/:id', renderEditForm);

router.put('/cerebros/edit/:id', updatecerebro);

//delete cerebro
router.delete('/cerebros/delete/:id', deleteCerebro);


module.exports = router;