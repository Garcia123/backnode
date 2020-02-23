const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MySchema = new Schema({
    name : String,
});

const Model = mongoose.model('User', MySchema);
module.exports = Model;