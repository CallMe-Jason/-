const fs = require('fs')
const path = require('path')
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/
fs.readFile(path.join(__dirname,'/index的副本.html'),'utf8',function(err,dataStr) {
    if(err) return console.log('失败');
    console.log('成功');
    css(dataStr)
    js(dataStr)
    html(dataStr)
})
function css(one) {
    const r1 = regStyle.exec(one)
    const r2 = r1[0].replace('<style>','').replace('</style>','')
    fs.writeFile(path.join(__dirname,'/聂婷加油/index.css'),r2,function(err){
        if(err) return console.log('失败');
        console.log('成功');
    })
}
function js(one) {
    const r1 = regScript.exec(one)
    const r2 = r1[0].replace('<script>','').replace('</script>','')
    fs.writeFile(path.join(__dirname,'/聂婷加油/index.js'),r2,function(err){
        if(err) return console.log('失败');
        console.log('成功');
    })
}
function html(one) {
    const r1 = one.replace(regStyle,'<link rel="stylesheet" href="./index.css">').replace(regScript,'<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname,'/聂婷加油/index.html'),r1,function(err){
        if(err) return console.log('失败');
        console.log("成功");
    })
}