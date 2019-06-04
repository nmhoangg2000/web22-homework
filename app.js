const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/ask', (req, res) =>{
    res.sendFile(__dirname + '/views/ask.html');
});

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/views/info.html');
});

app.post('/addquestion', (req, res) =>{
    // req.on("data", (data)=>{
    //     console.log(String(data).split('='));
    // });
    const fileData = fs.readFileSync('question.txt',{ encoding: 'utf-8'});
    let questionList = [];
    if(fileData){
        questionList = JSON.parse(fileData);
    }
    
    const question = {
        id: questionList.length,
        yes: 0,
        no: 0,
        content: req.body.question
    }
    questionList.push(question);
    fs.writeFileSync('question.txt', JSON.stringify(questionList));
    res.redirect('/');
});

app.use('/public', express.static('public'));

const port = 6969;
app.listen(port, (err)=> {
    if(err) console.log(err)
    else console.log("server starts success");
});