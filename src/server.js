const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');

//inicializaciones
const app = express();

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

//variables globales

//routers

// app.get('/', (req, res) => {
//     res.render('index')
// });
app.use(require('./router/index.routes'));
app.use(require('./router/zombies.routes'));
app.use(require('./router/cerebros.routes'));

//statics files
app.use(express.static(path.join(__dirname, 'public')))
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
app.use('/css', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/'));


module.exports = app;