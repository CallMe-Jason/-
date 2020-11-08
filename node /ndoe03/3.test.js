const itJason = require('./itjason-tools/index')
const str = itJason.dataFormat(new Date())
console.log(str);
// const a = itJason.a
// console.log(a);
const stTr = itJason.html('<h1>聂婷好厉害</h1>')
console.log(stTr);
const syr = itJason.unHtml(stTr)
console.log(syr);