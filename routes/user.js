var express = require('express');
var router = express.Router();
var user = require('../data/mongoose');
var multer = require('multer');

var upload = multer({dest: 'uploads/'});

var fs = require('fs');
var imgFile;
// 上传接口
router.post('/upload',upload.single('fileImg'), function (req, res) {
        //console.log(req.file);
       imgFile = `http://localhost:9090/${req.file.filename}`;
       res.send(imgFile);
});

// 获取所有图书列表
router.get('/books', function(req,res){
      fs.readFile('./data/user.json', 'utf-8',function(err, result){
             var cb = req.query.callback;
          res.send(`${cb}(${result})`)
      });
});
// 修改
router.get('/update', function(req, res){
        var uid = req.query.uid;
        var cb = req.query.callback;
        var data = req.query.data;
        var result = fs.readFileSync('./data/user.json','utf-8');
        result = JSON.parse(result);

       result = result.map(function(item){
             if(item.id == uid){
                 return data;
             }
           return item;
        });
        fs.writeFileSync('./data/user.json',JSON.stringify(result));
        res.send(`${cb}(${JSON.stringify(result)})`);
});

// 删除图书
router.get('/removeBook', function (req, res){
    fs.readFile('./data/user.json', 'utf-8',function(err, result){
        var cb = req.query.callback;
        var rid = req.query.rid;
        result = JSON.parse(result);
        result = result.filter(function (item) {
             return item.id != rid;
        });

        fs.writeFile('./data/user.json', JSON.stringify(result), function (err) {
            if(!err){
                res.send(`${cb}(${JSON.stringify(result)})`)
            } else {
                var errObj = {errNo:1,msg: '删除错误'};
                res.send(`${cb}(${JSON.stringify(errObj)})`)
            }
        });

    });
});

// 添加图书
router.post('/addBook',function(req, res){
    //console.log(imgFile);
    fs.readFile('./data/user.json','utf-8', function(err, result){
        result = JSON.parse(result);
        req.body.id = result.length+1;
        result.push(req.body);
        fs.writeFile('./data/user.json',JSON.stringify(result), function (err){
            !err? res.send(`'添加图书成功'`): console.error(err);
        })
    });

});
// 登录接口
router.get('/login', function (req, res) {
    var cb = req.query.callback;
    delete req.query.callback;
    var msg;
    var obj;
     user.find(req.query, function (err, docs) {
          if(err){
            res.send(err);
          } else {
              if(docs.length != 0){

                  msg = '登录成功';
                  obj = JSON.stringify({errNo: 0, msg: msg});
                  res.send(`${cb}(${obj})`)
              }else{
                  msg = '用户名或密码不对';
                  obj = JSON.stringify({errNo: 3, msg: msg});
                  res.send(`${cb}(${obj})`)
              }
          }
     });

});

// 注册接口
router.get('/register', function (req, res) {
    var cb = req.query.callback;
       var findObj = {username: req.query.username};
       delete req.query.callback;
       user.find(findObj, function (err, docs) {
                 if(err){
                     res.send(error);
                 } else {
                     if(docs.length == 0){
                         addUser(req.query, function (doc){
                             var obj = {errNo: 0,msg: '注册成功！'};
                             obj = JSON.stringify(obj);
                             res.send(`${cb}(${obj})`);
                         });
                     }else {
                         var obj = {errNo: 3,msg: '该用户已经注册过！'};
                         obj = JSON.stringify(obj);
                         res.send(`${cb}(${obj})`)
                     }
                 }
       });

});

// 获取其中一个
router.get('/:id', function (req, res) {
    var cb = req.query.callback;
    var id = req.params.id;
    var data;
    fs.readFile('./data/user.json', 'utf-8', function (err, result){
        //console.log(result);
        result = JSON.parse(result);
         data = result.filter(function (item){
                 return item.id == id;
          });
        data = JSON.stringify(data);
        res.send(`${cb}(${data})`);
    });
});

// 添加注册用户
   function addUser(info, fn){
       user.create(info, function (err, doc) {
             if (err){
                 res.send(err);
                 fn(err);
             } else {
                 fn(doc);
             }
       })
   }
module.exports = router;