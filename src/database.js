const mongoose = require('mongoose');

const { APP_MONGODB_HOST, APP_MONGODB_DBNAME } = process.env;
const MONGODB_URI = `mongodb://${APP_MONGODB_HOST}/${APP_MONGODB_DBNAME}`;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(db => console.log('Database connection succeeded'))
    .catch(err => console.log('Error trying to cennect db, ' + err));