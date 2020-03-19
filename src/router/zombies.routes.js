const { Router } = require('express');
const router = Router();


const { renderZombiesForm, createNewZombie, renderZombies, renderEditForm, updateZombie, deleteZombie } = require('../controllers/zombies.controlles');

//New Zombie
router.get('/zombies/add', renderZombiesForm);

router.post('/zombies/new-zombie', createNewZombie);

//Get All Zombies
router.get('/zombies', renderZombies);

//edit Zombies
router.get('/zombies/edit/:id', renderEditForm);

router.put('/zombies/edit/:id', updateZombie);

//delete zombie
router.delete('/zombies/delete/:id', deleteZombie);


module.exports = router;