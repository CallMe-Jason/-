//导入数据库操作模块
const db = require('../db/index')
const bcrypt = require('bcryptjs')//导入处理密码的模块

//获取用户基本信息
exports.getUserInfo = (req,res)=>{
    // res.send('ok')
    //定义查询的sql语句
    const sql = 'select id,username,nickname,email,user_pic from ev_users where id=?'
    //调用db.query 执行sql语句
    db.query(sql,req.user.id,(err,results)=>{//如果查询到则自动会在req身上挂载user为用户的属性
        //执行失败
        if(err) return res.cc(err)
        //执行语句成功
        if(results.length !== 1) return res.cc('获取用户信息失败')

        //用户信息获取成功
        res.send({
            status : 0,
            msg : '获取用户信息成功',
            data : results[0]
        })
    })
}
//更新用户基本信息
exports.updateUserInfo = (req,res)=>{
    // res.send('ok')
    //定义执行的sql语句
    const sql = 'update ev_users set ? where id=?'
    //执行sql语句
    db.query(sql,[req.body,req.body.id],(err,results)=>{
        if(err) return res.cc(err)
        //影响行数成功
        if(results.affectedRows !== 1) return res.cc('更新用户的基本信息失败！')
        res.cc('更新用户信息成功！',0)
    })
}
//更改密码
exports.updatePassword = (req,res)=>{
    //  res.send('ok')
    //根据id查询用户的信息
    //定义语句
    const sql = 'select * from ev_users where id=?'
    //执行语句
    db.query(sql,req.user.id,(err,results)=>{
        //执行失败
        if(err) return res.cc(err)
        //判断结果是否失败
        if(results.length !== 1) return res.cc('用户不存在')
        //判断旧密码是否正确
        const compareResult = bcrypt.compareSync(req.body.oldPwd,results[0].password)
        if(!compareResult) return res.cc('原密码错误')
        //更新数据库中的密码
        //定义sql语句
        const sql = 'update ev_users set password=? where id=?'
        //对新密码进行加密
        console.log(req.body.newPwd);
        const newPwd = bcrypt.hashSync(req.body.newPwd,10)
        //执行
        db.query(sql,[newPwd,req.user.id],(err,results)=>{
            // 执行失败
            if(err) return res.cc(err)
            //判断影响行数
            if(results.affectedRows !== 1) return res.cc('更新密码失败')
            res.cc('更新成功',0)
        })
    })
}
//更新头像
exports.updateAvatar = (req,res)=>{
    // res.send('ok')
    //定义sql语句
    const sql = 'update ev_users set user_pic=? where id=?'
    //调用执行语句
    db.query(sql,[req.body.avatar,req.user.id],(err,results)=>{
        //执行语句失败
        if(err) return res.cc(err)
        //影响的行数是否等于1
        if(results.affectedRows !== 1) return res.cc('更换头像失败')
        res.cc('更换头像成功',0)
    })
}