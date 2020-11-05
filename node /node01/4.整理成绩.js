//导入fs模块来操作文件
const  fs = require('fs')
//调用fs.readFile()方法读取文件
fs.readFile('./成绩.txt','utf8',function(err,dataStr){
//参数1读取文件路径 参数2编码格式 默认指定utf8 参数3指定一个回调函数，在回调函数中可以拿到失败和成功的结果 err表示失败 dataStr表示成功如果成功err返回null dataStr返回结果 失败则err变成错误对象 dataStr变成undefined
if(err) return console.log('读取失败',err);
// console.log('读取成功');
    // console.log(err);
    // console.log('-------------');
    // console.log(dataStr);
    const arrOld = dataStr.split(' ')
    const arrNew = []
    arrOld.forEach(item=>{
        arrNew.push(item.replace('=',':'))
    })
    const newStr = arrNew.join('\r\n')
    console.log(newStr);
    fs.writeFile(__dirname + '/整理成绩.txt',newStr,function(err){
        // console.log(err);
        if(err) {
            return console.log('写入文件失败' + err.message);
        }
        console.log('写入成功');
    })
})