const express = require('express');
const path = require('path');
const ViewRouter = express.Router();
const QuestionModel = require('../models/question');

// ViewRouter.get('/', (req, res)=>{
//     res.send("View router");
// });

ViewRouter.get('/', (req, res) =>{
    console.log(req.user);
    res.sendFile(path.resolve(__dirname, '../views/home.html'));
    // QuestionModel.countDocuments({},(err, totalQuestion)=>{
    //     if (err) console.log(err);
    //     else{
    //         const randomIndex = Math.floor(Math.random()*totalQuestion);
    //         QuestionModel
    //             .findOne({})
    //             .skip(randomIndex)
    //             .exec((err, question) =>{
    //                 if(err) console.log(err)
    //                 else {
    //                     res.send(`
                    //  <h1>
                    // ${question.content}
                    // </h1>
                    // <a herf="/api/vote/${question._id}/no"><button>Sai/không/trái</button></a>
                    // <a herf="/api/vote/${question._id}/no"><button>Sai/không/trái</button></a>
                    // <a herf="/question/${question._id}/no"><button>Kết quả vote</button></a>
                    // <a herf="/"><button>Câu hỏi khác</button></a>          
        
    //             `);
    //             }
    //         })
    //     }
    // })

    
    
});

ViewRouter.get('/ask', (req, res) =>{
    console.log(req.query);
    res.sendFile(path.resolve(__dirname + '../views/ask.html'));
});

ViewRouter.get('/question/:questionId', (req, res)=>{
    const questionId = req.params.questionId;
    const fileData = fs.readFileSync('question.txt',{ encoding: 'utf-8'});
    let questionList = [];
    if(fileData){
        questionList = JSON.parse(fileData);
    }
    const question = questionList[questionId];
    res.send(`
    ${question.content}| yes: ${question.yes}| no: ${question.no}
    `);
});

module.exports = ViewRouter;
