//连接数据库的实例
var mongodb = require('./db');

//创建一个构造函数 命令为User，里面的username、password、email
function User(user) {
    this.username = user.username;
    this.password = user.password;
    this.email = user.email;
};

module.exports = User;
//保存用户注册信息
User.prototype.save = function (callback) {
    //收集即将存入数据库的数据
    var user = {
        username:this.username,
        password:this.password,
        email:this.email
    }
    //通过open方法打开数据库
    mongodb.open(function (err,db) {
        //如果再打开数据库的时候发生错误，将错误结果返回给回调
        if(err){
            return callback(err);
        }
        //读取users集合
        db.collection('users',function (err,collection) {
            if(err){
                mongodb.close();
                return callback(err);
            }
            //将数据插入到users集合里面去
            collection.insert(user,{safe:true},function (err, user){
                mongodb.close();
                if(err){
                    return callback(err);
                }
                callback(null,user[0]);//成功的话返回用户名
            })
        })
    })
}
//读取用户信息
User.get = function (username,callback) {
    //1.打开数据库
    mongodb.open(function(err,db) {
        if(err){
            return callback(err);
        }
        //读取users集合
        db.collection('users',function (err,collection) {
            if(err){
                mongodb.close();
                return callback(err);
            }
            //查询用户名(username)的文档
            collection.findOne({username:username},function (err,user) {
               // mongodb.close();
                if(err){
                    return callback(err);
                }
                return callback(null,user);//成功返回查询的用户信息
            })
        })
    })
}