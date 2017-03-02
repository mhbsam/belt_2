var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
 question: {type: String, require: true, minlength:15},
 answer:{type: String, require: true, minlength:2},
 fake1: {type: String, require: true, minlength:2},
 fake2: {type: String, require: true, minlength:2}
}, {timestamps: true});

var Question = mongoose.model('Question', QuestionSchema);
