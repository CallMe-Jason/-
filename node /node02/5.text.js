const username = '张三'
function sayHi(){
    console.log('123');
}
//向module.exports对象上挂载一个username属性
module.exports.username = username
// console.log('123');
module.exports.sayHi = function(){
    console.log('123');
}