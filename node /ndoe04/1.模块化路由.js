//引入
const express = require('express')
const router = express.Router()

//挂载
router.get('/user/list',(req,res)=>{
    res.send('Get User List')
})
router.post('/user/add',(req,res)=>{
    res.send('Add New User')
})

//暴露
module.exports = router