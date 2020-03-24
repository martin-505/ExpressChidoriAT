const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {

        return next();
    }
    req.flash('error_mgs', 'No puedes acceder registrate');
    res.redirect('/users/singin');
}
module.exports = helpers;