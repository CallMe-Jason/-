//导入
const express = require('express')
const router = express.Router()
const user_handler = require('../router_handler/user')
const expressJoi = require('@escook/express-joi')//导入验证数据的中间件
const {reg_login_schema} = require('../schema/user')

//接口
//注册
router.post('/reguser',expressJoi(reg_login_schema),user_handler.regUser)

//登录
router.post('/login',expressJoi(reg_login_schema),user_handler.login)



//暴露
module.exports = router