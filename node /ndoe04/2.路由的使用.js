//引入
const express = require('express')
const app = express()

//引入
const router = require('./1.模块化路由')
app.use('/files',router)

//启动
app.listen(80,()=>{
    console.log('http://127.0.0.1');
})