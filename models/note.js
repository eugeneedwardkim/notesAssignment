var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Note = new Schema({
    title: String,
    description: String,
    updatedAt: Date
});

module.exports = mongoose.model('Note', Note);