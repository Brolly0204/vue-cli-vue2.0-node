let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let path = require('path');

app.use(express.static(path.join(__dirname, 'uploads')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//let bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({extended: true}));
let user = require('./routes/user');
app.use(function (req,res,next) {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Mthods', 'GET,POST');
    next();
});
app.use('/user', user);

app.listen(9090, function(){
    console.log('监听9090端口');
});
