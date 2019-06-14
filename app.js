const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const mongoose = require('mongoose');
const app = express();

const QuestionModel = require('./models/question');
console.log(QuestionModel);
const ViewRouter = require('./router/view');
const ApiRouter = require('./router/api');

mongoose.connect('mongodb://localhost/quyetde-22',{ useNewUrlParser:true } ,(err)=>{
    if(err) console.log(err)
    else console.log("DB connect success!!")
})

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use((req, res,next)=>{
    console.log("Hello middleware");
    // res.send("Stop!!!");
    // req.user = "Huy";
    next();
});

app.use('/',ViewRouter);
app.use('/api',ApiRouter);






app.use('/public', express.static('public'));

const port = 6969;
app.listen(port, (err)=> {
    if(err) console.log(err)
    else console.log("server starts success");
});