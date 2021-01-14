// 导入react
import React from 'react'

// 创建类组件
class FirstComponent extends React.Component{
  // 触发事件的函数
  handleClick () {
    console.log('单击事件触发了')
  }
  render () {
    return (
      <div>
        这是我的第一个抽离的组件
      <button onClick={this.handleClick}>单击事件</button>
      </div>
    )
  }
}

// 创建函数组件
function  App() {
  function handler () {
    console.log('触发了函数组件中的事件')
  }
  return <button onClick={handler}>函数组件</button>
}

// 导出组件
export default App