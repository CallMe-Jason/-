const a = 10
const b = 20

const sum = a + b
function num(){
    num = a - b
}
module.exports.sum = sum
module.exports.a = a
module.exports.num = function(a,b) {
    const num = a - b
    console.log(num);
}