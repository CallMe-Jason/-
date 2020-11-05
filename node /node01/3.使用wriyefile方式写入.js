// fs.writeFile(file,data[,option],callback)

const fs = require('fs')//导入模块
fs.writeFile('./1.js','he阿伟llo','utf-8',function(err){
 //调用方法写入内容 参数1 表示文件的存放路径，参数2 表示要写入的内容 参数3 是编码格式 可以省略 参数4 是一个回调函数
})