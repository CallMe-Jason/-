// 引入react
import React from 'react'
import ReactDOM from 'react-dom'

// 引入样式
import './index.css'

// 引入类组件
import HelloCl from './HelloCl'

// 引入函数组件
import HelloFn from './HelloFn'

// 创建react元素的第一种方法
// const title = React.createElement('h1', null, 'Hello React')

// 嵌入变量使用{}
const name = 'Jason'

// 嵌入变量的函数
const sayHi = () => {
  return 'Hi~'
}
function sayBy () {
  return 'By~'
}

// 嵌入JSX
const div = (
  <div>嵌入的JSX</div>
)

// 条件渲染
const isLoading = true
// 条件渲染的函数
const loadData = () => {
  if (isLoading) {
    return (
      <div>loading...</div>
    )
  }else {
    return (
      <div>数据加载完成</div>
    )
  }
}

// 逻辑与运算符
const loadData1 = () => {
  return isLoading && (
    <div>数据加载完成</div>
  )
}

// 数据
const songs = [
  {id: 1, name: '暗渡陈仓'},
  {id: 2, name: '无中生有'},
  {id: 3, name: '凭空想象'}
]
// 列表渲染
const list = (
  <ul>
    {songs.map((item) => (<li key={item.id}>{item.name}</li>))}
  </ul>
)

// 创建react元素的第二种方法(JSX)常用
// 一般用小括号包住
const title =  (
  <div>
    <h1>Hello JSX</h1>
    <span>嵌入变量:{name}</span>
    <div>支持各类数据类型:数字型--{1} 字符串型--{'2'}</div>
    <div>支持计算:{1 + 1}</div>
    <div>支持三元:{3 > 5 ? '小于' : '不大于'}</div>
    <div>嵌入箭头函数:{sayHi()}</div>
    <div>嵌入普通函数:{sayBy()}</div>
    <div>{div}</div>
    <div>条件渲染: {loadData()}</div>
    <div>逻辑与运算符:{loadData1()}</div>
    <div>列表渲染:{list}</div>
    <div style={{color: 'red'}}>样式处理--行内式</div>
    <div className="cln">样式处理--类名className</div>
  </div>
)

// 使用函数创建组件
function ComponentFn () {
  return (
    <div>使用函数创建的组件</div>
  )
}

// 使用类创建的组件
class ComponentCl extends React.Component{
  render() {
    return (
      <div>使用类创建的组件</div>
    )
  }
}

// 渲染react元素
ReactDOM.render(title, document.getElementById('root'))
ReactDOM.render(<ComponentFn />, document.getElementById('componentFn'))
ReactDOM.render(<ComponentCl />, document.getElementById('componentCl'))
ReactDOM.render(<HelloFn />, document.getElementById('HelloFn'))
ReactDOM.render(<HelloCl />, document.getElementById('HelloCl'))
