// Configuring the database
const dbConfig = require('./db.config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports.dbinit = function () {
   
    // Connecting to the database
    mongoose.connect(dbConfig.url, {
        useNewUrlParser: true
    }).then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });
};