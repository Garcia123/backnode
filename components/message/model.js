const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MySchema = new Schema({
    user : String,
    message : {
        type: String,
        required : true
    },
    date: Date
});

const Model = mongoose.model('Message', MySchema);
module.exports = Model;