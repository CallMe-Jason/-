const express = require('express')
const router =  express.Router()
router.get('/get',(req,res) =>{
    const query = req.query
    res.send({
        status : 0,//0表示处理成功，1表示失败
        msg : 'GET 请求成功',
        data : query//需要响应给客户端的数据

    })
})

router.post('/post',(req,res)=>{
    const body = req.body
    res.send({
        status : 0,
        mag : 'POST 请求成功',
        data : body
    })
})
module.exports = router