const http = require('http')
const server = http.createServer()
const fs = require('fs')
const path = require('path')
//req是请求对象，包含了与客户端相关的数据和属性
server.on('request',(req,res)=>{
//url是客户端的请求地址
const url = req.url
//method是请求的类型
const method = req.method
// const str = `Your request url is ${url},and request method is ${method}请求地址是${url}，请求类型是${method}`
// console.log(str);
// 调用res.end方法向客户端响应一些内容
// res.setHeader('Content-Type','text/html; charset=utf-8')
// res.end('找不到页面 404 ')
if(method === 'GET'){
    res.setHeader('Content-Type','text/html; charset=utf-8')
       if(url === '/') {
          fs.readFile(path.join(__dirname,'../../../../练习/node练习/clock/index.html'),'utf8',function(err,dataStr){
            //    if(err) return console.log('读取失败' + err.message);
               console.log('读取成功');
               res.end(dataStr)
           })
       }else {
           res.end('404')
       }
}else {

}
// res.end(str)
})
//启动服务器
server.listen(8080,()=>{
    console.log('server running at http://127.0.0.1:8080');
})  