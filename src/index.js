require('dotenv').config();

const app = require('./server');
require('./database');


app.listen(app.get('port'), () => console.log('Listening on port: ' + app.get('port')));