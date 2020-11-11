const url = require('url')
const express = require('express')
const app = express()
app.use((req,res,next) => {
    console.log(url.parse(req.url));
    const {query} = url.parse(req.url,true)
    req.query2 = query
    next()
})
app.get('/user',(req,res)=>{
    res.send(req.query2)
})
app.listen(80,()=>{9
    console.log('http://127.0.0.1');
})