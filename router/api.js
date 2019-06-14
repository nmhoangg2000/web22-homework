const express = require('express');
const fs = require('fs');
const ApiRouter = express.Router();
const QuestionModel = require('../models/question');

ApiRouter.get('/randomquestion',(req, res)=>{
    QuestionModel.countDocuments({},(err, totalQuestion)=>{
        if (err) console.log(err);
        else{
            const randomIndex = Math.floor(Math.random()*totalQuestion);
            QuestionModel
                .findOne({})
                .skip(randomIndex)
                .exec((err, question) =>{
                    if(err) console.log(err)
                    else res.send(question);
                
            })
        }
    })
})

ApiRouter.post('/vote', (req,res) =>{
    console.log(req.body);
    const vote = req.body.vote
    const id = req.body.id
    const fileData = fs.readFileSync('question.txt',{ encoding: 'utf-8'});
    let questionList = [];
    if(fileData){
        questionList = JSON.parse(fileData);
    }
    questionList[id][vote] += 1;
    fs.writeFileSync('question.txt', JSON.stringifyquestionList);
    res.redirect('/');
});

ApiRouter.post('/addquestion', (req, res) =>{
    // req.on("data", (data)=>{
    //     console.log(String(data).split('='));
    // });

    // const fileData = fs.readFileSync('question.txt',{ encoding: 'utf-8'});
    // let questionList = [];
    // if(fileData){
    //     questionList = JSON.parse(fileData);
    // }
    
    
    // const question = {
    //     id: questionList.length,
    //     yes: 0,
    //     no: 0,
    //     content: req.body.question
    // }
    // questionList.push(question);
    // fs.writeFileSync('question.txt', JSON.stringify(questionList));

    QuestionModel.create({
        content: req.body.question
    }, (err, questionCreated)=>{
        if (err) console.log(err)
        else res.redirect('/');
    });


    // res.redirect('/');
});

ApiRouter.get('/vote/:questionId/vote', (req, res) => {
    console.log(req.params);
    const questionId = req.params.questionId;
    const vote = req.param.vote;

    // QuestionModel.findOneAndUpdate(
    //     {_id: questionId},
    //     { $inc: {[vote]:1}},
    //     { new: true},
    //     (err, questionUpdated)=>{
    //         if(err) console.log(err)
    //         else res.redirect(`/question/${questionUpdated._id}`);
    //     }
    // )

    // const fileData = fs.readFileSync('question.txt',{ encoding: 'utf-8'});
    // let questionList = [];
    // if(fileData){
    //     questionList = JSON.parse(fileData);
    // }
    // questionList[questionId][vote].yes += 1;
    // fs.writeFileSync('question.txt', JSON.stringify(questionList));
    
    QuestionModel.findOne({ _id: questionId }, (err, questionFound) => {
		if(err) console.log(err)
		else if(!questionFound) console.log("Not found")
		else {
			questionFound[vote] += 1;
			questionFound.save((err, questionUpdated) => {
				if(err) console.log(err)
				else res.redirect(`/question/${questionUpdated._id}`);
			});
		}
	});
});



module.exports = ApiRouter;