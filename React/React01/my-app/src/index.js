// ES6导入react
import React from 'react';
import ReactDOM from 'react-dom';

// 引入抽离的组件
import FirstComponent from './FirstComponent'

import StateComponent from './StateComponent'

// 引入css文件
import './index.css'

// 创建react元素
// const title = React.createElement('h1', null, 'Hello React!!!')
// 使用jsx创建react元素
const name = 'Jack'

// 列表渲染
// 如果要渲染一组数据，应该使用数组的map()方法
const songs = [
  {id: 1, name: '痴心绝对'},
  {id: 2, name: '像我这样的人'},
  {id: 3, name: '南山南'}
]
const list = (
	<ul>
  	{songs.map(item => (<li key={item.id}>{item.name}</li>))}
  </ul>
)

// 可以嵌入JSX
const dv = (
<div>
  作为嵌入
{/* {sayBy()}   */}
</div>
  )

// 可以嵌入函数
const say = () => 'Hi~'

// 组件
function Hello() {
  // function  handler() {
  //   console.log('触发了')
  // }
  const handler = () => {
    console.log('触发了')
  }
  return (
    <button onClick={handler}>Hello</button>
  )
}

//可在嵌入的函数中写语句
const isLoading = true
const loadData = () => {
  if (isLoading) {
    return <div style={{color: 'red'}}>loading...</div>
  }
  return <div>数据加载完成，此处显示加载后的数据</div>
}

// 可以嵌入三元和计算和属性
const title = (
  <h1>
    {list}
    {loadData()}
    <p>Hello JSX</p>
    <span className='title'>这是span标签</span>
    {name}
    {dv}
    {say()}
    {1 + 9}
    {'a'}
    {1}
    {3 > 5 ? '大于' : '小于等于'}
  </h1>
)

// 渲染react元素
ReactDOM.render(title, document.getElementById('root'))
ReactDOM.render(<Hello />, document.getElementById('root1'))
ReactDOM.render(<FirstComponent />, document.getElementById('root2'))
ReactDOM.render(<StateComponent />, document.getElementById('state'))


