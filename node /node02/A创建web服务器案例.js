const http = require('http')
const server = http.createServer()
server.on('request',function(req,res){//request是个事件，是固定的不可改变
    //  req是一个请求对象
    //  res是一个响应对象
    console.log('Someone visit out web server');
    res.end('hello world')
})
server.listen(8080,function(){//80表示端口号，如果是80可以被省略
    console.log('server running at http://127.0.0.1:8080');
})
