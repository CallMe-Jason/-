//导入
const express = require('express')
const router =  express.Router()

//导入路由处理模块
const userInfo_handler = require('../router_handler/userinfo')
//导入验证数据的中间件
const expressJoi = require('@escook/express-joi')
const {update_userinfo_schema,update_password_schema,update_avatar_schema} = require('../schema/user')
//挂载
router.get('/userinfo',userInfo_handler.getUserInfo)
//更新用户信息的路由
router.post('/userinfo',expressJoi(update_userinfo_schema),userInfo_handler.updateUserInfo)
//重置密码
router.post('/updatepwd',expressJoi(update_password_schema),userInfo_handler.updatePassword)
//更换头像
router.post('/update/avatar',expressJoi(update_avatar_schema),userInfo_handler.updateAvatar)

module.exports = router