const { Router } = require('express');
const router = Router();
const { isAuthenticated } = require('../helpers/auth');

const { renderZombiesForm, createNewZombie, renderZombies, renderEditForm, updateZombie, deleteZombie } = require('../controllers/zombies.controlles');

//New Zombie
router.get('/zombies/add', isAuthenticated, renderZombiesForm);

router.post('/zombies/new-zombie', isAuthenticated, createNewZombie);

//Get All Zombies
router.get('/zombies', isAuthenticated, renderZombies);

//edit Zombies
router.get('/zombies/edit/:id', isAuthenticated, renderEditForm);

router.put('/zombies/edit/:id', isAuthenticated, updateZombie);

//delete zombie
router.delete('/zombies/delete/:id', isAuthenticated, deleteZombie);


module.exports = router;