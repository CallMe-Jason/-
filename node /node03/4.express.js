//导入expres
const express = require('express')

//创建web服务器
const app = express()

//监听请求
app.get('/user/:id/:name',(req,res) => {
    //调用express提供的res.send()方法，向客户端响应一个JSON对象
    res.send(req.params)
    })
app.post('/user',(req,res) => {
    //调用express提供的res.send()方法，向客户端响应一个文本字符串
    res.send({"name" : "zs","age" : 20,'gender' : '男'})
    })

//启动web服务器
app.listen(80,()=>{
console.log('express server running at http://127.0.0.1')
 })