var mongoose = require('mongoose');
var Question = mongoose.model('Question');


module.exports = {

    //displaying all the customers in the index route
        display_all: function(req, res){
            Question.find({}, function(err, questions){
                if(err){
                    console.log(err);
                    res.json(err)
                }
                else{
                    res.json(questions);
                }
            })
        },


    // Creating a new question on /new_question route
        CreateQuestion: function(req, res){
            console.log("req body in server controller",req.body);
            var question = new Question ({question:req.body.question, answer:req.body.answer, fake1: req.body.fake1, fake2: req.body.fake2 });
            question.save(function(err){
                if(err){
                    console.log(err);
                    res.json(err);
                }
                else{
                    console.log ('question successfully created!', question);
                    res.redirect('/index_customers');
                }
            })
        },

}
