//导入
const db = require('../db/index')
const bcrypt = require('bcryptjs')//导入bcryptjs这个包
const jwt = require('jsonwebtoken')//导入生成token的包
const config = require('../config')//导入全局配置的文件

exports.regUser = function(req,res) {
    // res.send('regUser')
    const userInfo = req.body
    // console.log(userinfo);
    // if(!userInfo.username || !userInfo.password) {
    //     return res.send({status : 1,msg : '用户名或密码不合法'})
    // }
    //定义sql语句
    const sqlStr = 'select * from ev_users where username=?'
    db.query(sqlStr,userInfo.username,(err,results)=>{
        //执行sql语句失败
        if(err) {
            // return res.send({status : 1,msg : err.message})
            return res.cc(err)
        }
        //判断用户名是否被占用
        if(results.length > 0) {
            // return res.send({status : 1,msg : '用户名被占用，请更换其他用户名'})
            return res.cc('用户名被占用，请更换其他用户名')
        }
        //调用bcryptjs对密码进行加密
        userInfo.password = bcrypt.hashSync(userInfo.password,10)
        // console.log(userInfo);
        //定义sql语句
        const sql = 'insert into ev_users set ?'
        //执行sql语句
        db.query(sql,{username : userInfo.username,password : userInfo.password},(err,results)=>{
            //判断sql语句是否成功
            // if(err) return res.send({status : 1,msg :  err.message})
            if(err) return res.cc(err)
            //判断影响函数是否为1
            // if(results.affectedRows !== 1) return res.send({status : 1,msg : '注册用户失败，请稍后再试'})
            if(results.affectedRows !== 1) return res.cc('注册用户失败，请稍后再试')
            //注册成功
            res.send({satatus : 0,msg : '注册成功'})
        })
    })
}
exports.login = function(req,res) {
    // res.send('login')
    //接收表单的数据
    const userInfo = req.body
    //定义sql语句
    const sql = 'select * from ev_users where username=?'
    //执行sql语句
    db.query(sql,userInfo.username,(err,results)=>{
        //执行失败
        if(err) return res.cc(err)
        //执行成功,但是获取到的条数不等于1
        if(results.length !== 1) return res.cc('登录失败')
        //判断密码是否正确
        // res.send('login')
        console.log(results[0])
        const compareResults = bcrypt.compareSync(userInfo.password,results[0].password)//第一个参数为用户输入的密码，第二个为数据库的密码
        if(!compareResults) return res.cc('登录失败')
        //生成token字符串
        // res.send('ok')
        const user = {...results[0],password : '',user_pic : ''}//清空密码和图片信息 ？？？
        // console.log(user);
        const tokenStr = jwt.sign(user,config.jwtSecretKey,{expiresIn : config.expiresIn})
        // console.log(tokenStr);
        res.send({
            status : 0,
            msg : '登录成功',
            token : 'bearer '  + tokenStr
        })

    })

}