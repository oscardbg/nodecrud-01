const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const Handlebars = require('handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

/**
 * Initializations
 */

const server = express();
require('./config/passport');

/**
 * Settings
 */

server.set('port', process.env.PORT || 3000);
server.set('views', path.join(__dirname, 'views'));
server.engine('hbs', exphbs({ 
    extname: 'hbs', defaultLayout: 'main', 
    layoutsDir: path.join(server.get('views'), 'layouts'),
    partialsDir: path.join(server.get('views'), 'partials'),
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
server.set('view engine', 'hbs');

/**
 * Middlewares
 */

//server.use(morgan('dev'));
server.use(express.urlencoded({ extended: false }));
server.use(methodOverride('_method'))
server.use(session({secret: 'secret', resave: true, saveUninitialized: true}));
server.use(passport.initialize()); //========>Must be placed here, right after use session
server.use(passport.session());
server.use(flash());

/**
 * Global Variables
 */

server.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
})

/**
 * Routes
 */

server.use(require('./routes/index.routes'));
server.use(require('./routes/notes.routes'));
server.use(require('./routes/users.routes'));

/**
 * Static Files
 */

server.use(express.static(path.join(__dirname, 'public')));

module.exports = server;