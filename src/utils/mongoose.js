/*
* Mongodb Connection Set Up
*/

/*requiring mongodb node modules */
const mongodb = require('mongodb');
const mongoose = require('mongoose');

// Connect to the database using mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ChatApp2', { useMongoClient: true });

module.exports = {mongoose};
