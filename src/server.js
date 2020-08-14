const express = require('express');
const path = require('path');

/**
 * Initializations
 */

const server = express();

/**
 * Settings
 */

server.set('port', process.env.PORT || 3000);
server.set('views', path.join(__dirname, 'views'));

/**
 * Middlewares
 */

server.use(express.urlencoded({ extended: false }));

/**
 * Global Variables
 */



/**
 * Routes
 */

server.get('/', (req, res) => {
    res.send('This is the home page');
})

/**
 * Static Files
 */

server.use(express.static(path.join(__dirname, 'public')));

module.exports = server;