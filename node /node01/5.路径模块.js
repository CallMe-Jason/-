const path = require('path')
const fs = require('fs')
const pathStr = path.join('/a','/b/c','../../','./d','e')
console.log(pathStr)//输出为/a/b/d/e ../会抵消一次前面离它最近的路径
fs.readFile(path.join(__dirname,'/整理成绩.txt'),'utf8',function(err,dataStr){
    console.log(dataStr);
})