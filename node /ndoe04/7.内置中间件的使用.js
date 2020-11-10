const express = require('express')
const app = express()
//通过这个内置中间件解析表单json格式的数据
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.post('/user',(req,res)=>{
    // 如果不配置解析表单的中间件，req.body是undefined
    console.log(req.body);
    res.send('ok')
})
app.post('/user',(req,res)=>{
    // 如果不配置解析表单的中间件，req.body是undefined
    console.log(req.body);
    res.send('okk')
})
app.listen(80,()=>{
    console.log('http://127.0.0.1');
})