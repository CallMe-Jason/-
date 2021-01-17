// 导入react
import React from 'react'
import ReactDOM from 'react-dom'

// 创建存储数据的组件
class Son extends React.Component {
  state = {
    count: 0
  }
  render () {
    return this.props.children(this.state)
  }
}

// 创建类组件
class Father extends React.Component {
  render () {
    return (
      <Son>
        {data => {
          return (
            <div>
              count的值为: {data.count}
            </div>
          )
        }}
      </Son>
    )
  }
}

// 渲染react元素
ReactDOM.render(<Father />, document.getElementById('root'))