const http = require('http')
const server = http.createServer()
//req是请求对象，包含了与客户端相关的数据和属性
server.on('request',(req,res)=>{
//url是客户端的请求地址
const url = req.url
//method是请求的类型
const method = req.method
const str = `Your request url is ${url},and request method is ${method}`
// console.log(str);
// 调用res.end方法向客户端响应一些内容
res.end(str)
})
//启动服务器
server.listen(80,()=>{
    console.log('server running at http://127.0.0.1');
})