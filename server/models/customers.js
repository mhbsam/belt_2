var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
 name: {type: String, require: true, minlength:2},
 score: {type: Number, require: true, minlength:1},
 pecentage: {type: Number, require: true, minlength:1}
}, {timestamps: true});

var Customer = mongoose.model('Customer', CustomerSchema);
