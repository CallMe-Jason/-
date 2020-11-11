const express = require('express')
const app = express()

const mw = function(req,res,next) {
    console.log('全局中间件');
    next()
}
const mm = function(req,res,next) {
    console.log('局部中间件');
    next()
}
app.use(mw)
app.get('/use',(req,res)=>{
    res.send('User pagee')
})
app.get('/user',mm,(req,res)=>{
    res.send('User page')
})
app.listen(3000,()=>{
    console.log('http://127.0.0.1:3000');
})