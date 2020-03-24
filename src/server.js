const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const sesson = require('express-session');
const passport = require('passport');

//inicializaciones
const app = express();
require('./config/passport');

//configuraciones

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//midelwares

app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(sesson({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


//variables globales
app.use((req, res, next) => {
    res.locals.success_mgs = req.flash('success_mgs');
    res.locals.error_mgs = req.flash('error_mgs');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
})

//routers

// app.get('/', (req, res) => {
//     res.render('index')
// });
app.use(require('./router/index.routes'));
app.use(require('./router/zombies.routes'));
app.use(require('./router/cerebros.routes'));
app.use(require('./router/users.routes'));


//statics files
app.use(express.static(path.join(__dirname, 'public')))
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
app.use('/css', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/'));


module.exports = app;