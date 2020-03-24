const { Router } = require('express');
const router = Router();

const { renderSignUpForm, renderSingInForm, singIn, singUp, logOut } = require('../controllers/users.controllers');

router.get('/users/singup', renderSignUpForm);

router.post('/users/singup', singUp);

router.get('/users/singin', renderSingInForm);

router.post('/users/singin', singIn);

router.get('/users/logout', logOut);



module.exports = router;