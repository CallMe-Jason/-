const path = require('path')
const fs = require('fs')
//定义正则表达式
//里面的斜杠前要加个反斜杠表示转义
const regCss = /<style>[\s\S]*<\/style>/
const regJs =  /<script>[\s\S]*<\/script>/
fs.readFile(path.join(__dirname,'/index的副本.html'),'utf8',function(err,dataStr){
    // console.log(dataStr);
    if(err) return console.log('读取文件失败' + err.message);
    // resolveCss(dataStr)
    // resolveJs(dataStr)
    // resolveHtml(dataStr)
    console.log(dataStr);
})
//css脚本
function resolveCss(htmlStr){
    const r1 = regCss.exec(htmlStr)
    const newCss = r1[0].replace('<style>','').replace('</style>','')
    // console.log(newCss);
    fs.writeFile(path.join(__dirname,'/clock/index.css'),newCss,function(err){
        if(err) return console.log('写入Css失败',err.message);
        console.log('写入Css成功');
    })

}
//js脚本
function resolveJs(htmlStr){
    const r2 = regJs.exec(htmlStr)
    const newJs = r2[0].replace('<script>','').replace('</script>','')
    // console.log(newJs);
    fs.writeFile(path.join(__dirname,'/clock/index.js'),newJs,function(err){
        if(err) return console.log('写入Js失败',err.message);
        console.log('写入Js成功');
    })

}
//html脚本
function resolveHtml(htmlStr){
    const newHtml = htmlStr.replace(regCss,'<link rel="stylesheet" href="./index.css" />').replace(regJs,'<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname,'/clock/index.html'),newHtml,function(err){
        if(err) return console.log('写入失败' + err.message);
        console.log('写入成功');

    })
}


