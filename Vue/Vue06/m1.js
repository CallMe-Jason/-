let a = 10
let c = 20
let d = 30

function show(){
    console.log('1111111');
}
export default{//默认导出
    a,
    c,
    show
}
export let s1 = 'aaa'
export let s2 = 'ccc'
export function say() {
    console.log('ooooooooo')
  }