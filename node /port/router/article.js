//文章的路由模块
const express = require('express')
const router = express.Router()

//导入需要的处理函数模块
const article_handler = require('../router_handler/article')

//导入验证数据的中间件
const expressJoi = require('@escook/express-joi')

//导入验证数据的中间件
const { add_article_schema} = require('../schema/article')


//导入multer  和path
const multer = require('multer')
const path = require('path')
const uploads = multer({dest:path.join(__dirname,'../uploads')})

//发布文章的路由
router.post('/add',uploads.single('cover_img'),expressJoi(add_article_schema),article_handler.addArticle)


//暴露
module.exports = router