var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bookUser');
var UserScheam = new mongoose.Schema({
    username: String,
    password: String
});

var user = mongoose.model('bookUser', UserScheam);

module.exports = user;
//var users = [{username: 'lili', password: 'lwl111'}];

// 保存数据  Model.create(保存数据,callback);

//user.create({username: 'li111', password: 'lwl111'}, function (err, docs) {
//      if(err){
//          console.error(err);
//      } else{
//          console.log(docs);
//      }
//});

// 查找匹配一条
//user.findOne({username: 'wenli'}, function (err, doc) {
//         if(err){
//             console.error(err);
//         }else {
//             console.log(doc);
//         }
//});

// 查找匹配多条  Model.find(查询条件,callback);
// Model.find({},callback); 查找所有数据
// user.find({username: 'lili'}, function (error, docs) {
//    if (error) {
//        console.error(error);
//    } else {
//        console.log(docs);
//    }
//});

// 更新数据 (查询条件，更新对象)   Model.update(查询条件,更新对象,callback);
//user.update({username: 'wenli'}, {password: 'lwl1224'}, function (error) {
//       if (error){
//           console.error(error);
//       } else {
//           console.log('update is success!');
//       }
//
//});

// 删除   Model.remove(查询条件,callback);
//user.remove({}, function (error) {
//          if (error){
//              console.error(error);
//          } else {
//              console.log('delete is success!');
//          }
//});

// 按ID查找单条数据
//var personId = '58b44acb5302632cc43ab068';
//user.findById(personId, function (err, doc) {
//     if(err){
//         console.err(err);
//     } else {
//         console.log(doc);
//     }
//});