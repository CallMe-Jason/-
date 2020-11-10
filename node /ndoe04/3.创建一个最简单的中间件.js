const express = require('express')
const app = express()
const mw = function(req,res,next) {
    console.log('这是最简单的中间件函数');
    //把流转关系转交给下一个函数
    next()
}
app.use(mw)
app.get('/user',(req,res)=>{
    res.send('User page')
})
app.listen(80,()=>{
    console.log('http://127.0.0.1');
})