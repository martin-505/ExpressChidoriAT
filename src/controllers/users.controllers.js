const usersCtrl = {};
const User = require('../models/User');
const passport = require('passport');

usersCtrl.renderSignUpForm = (req, res) => {
    res.render('users/singup');
};

usersCtrl.singUp = async(req, res) => {
    const errors = [];

    const { nombre, email, password, confirm_password } = req.body;
    if (password != confirm_password) {
        errors.push({ text: 'Passwords no coinciden' });
    }
    if (password.length < 4) {
        errors.push({ text: 'La contraseña es demaciado corta' });
    }
    if (errors.length > 0) {
        res.render('users/singup', {
            errors,
            nombre,
            email
        })
    } else {
        const emailUser = await User.findOne({ email: email });
        if (emailUser) {
            req.flash('error_mgs', 'el correo es existente');
            res.redirect('singup');
        } else {
            const newUser = new User({ nombre, email, password });
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            req.flash('success_mgs', 'esta registrado');
            res.redirect('/users/singin');
        }
    }
};

usersCtrl.renderSingInForm = (req, res) => {
    res.render('users/singin');
};

usersCtrl.singIn = passport.authenticate('local', {
    failureRedirect: '/users/singin',
    successRedirect: '/zombies',
    failureFlash: true
});

usersCtrl.logOut = (req, res) => {
    req.logOut();
    req.flash('success_mgs', 'Has cerrado la secion');
    res.redirect('/users/singin');
};

module.exports = usersCtrl;