//导入
const express = require('express')
const app = express()
const userRouter = require('./router/user')
const joi = require('@hapi/joi')

//跨域
const cors = require('cors')
app.use(cors())

//解析表单
app.use(express.urlencoded({extended : false}))

//托管静态资源
app.use('/uploads',express.static('./uploads'))

//在路由之前封装res.cc函数
app.use((req,res,next)=>{
    res.cc = function(err,status = 1){
       res.send({
        //status默认值为1，表示失败的情况
        status,
        //err的值可能是一个错误对象，也可能是一个错误的描述字符串
        message : err instanceof Error ? err.message : err
       })
    }
    next()
})
//配置解析token的中间件
const expressJWT = require('express-jwt')
const config = require('./config')
app.use(expressJWT({secret : config.jwtSecretKey}).unless({path : [/^\/api\//]}))

//路由
app.use('/api',userRouter )
//导入并使用用户信息的模块
const userinfoRouter = require('./router/userinfo')
app.use('/my',userinfoRouter)

//导入并使用文章分类的路由模块
const artCateRouter = require('./router/artcate')
app.use('/my/article',artCateRouter)

//导入并使用路由模块
const articleRouter = require('./router/article')
app.use('/my/article',articleRouter)

//使用错误级别的中间件
app.use((err,req,res,next)=>{
    if(err instanceof joi.ValidationError) return res.cc(err)
    //身份认证失败后的错误
    if(err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
    //未知的错误
    res.cc(err)
})

//启动服务器
app.listen(3007,()=>{
    console.log('express server running at http://127.0.0.1:3007');
})
