const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    throw new Error('抛出一个错误')
})
app.use((err,req,res,next)=>{
    console.log('发生了错误');
    res.send('Error' + err.message)
})
app.listen(80,()=>{
    console.log('http://127.0.0.1');
})