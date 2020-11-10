const express = require('express')
//导入
const app = express()
//创建
app.use(express.urlencoded({extended:false}))
const cors = require('cors')
app.use(cors())
const router = require('./10.路由模块')
//用use注册路由模块
app.use('/api',router)
//启动服务器
app.listen(80,()=>{
    console.log('http://127.0.0.1');
})