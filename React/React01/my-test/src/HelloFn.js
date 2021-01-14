// 导入react
import React from 'react'

// 创建函数组件
function HelloFn () {
  // 函数组件的方法
  function handler (e) {
    alert('触发了函数组件的事件')
    console.log(e, '触发了事件对象/合成事件/合成对象')
  }
  return (
    <div>
      抽离出来的函数组件
      <button onClick={handler}>点击触发函数组件的事件</button>
    </div>
  )
}

// 导出
export default HelloFn