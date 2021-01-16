// 导入react
import React from 'react'

// 导入组件
import Child1 from './Child1'
import Child2 from './Child2'

class Father extends React.Component{
  state = {
    // 共享的数据
    count: 0
  }
  // 共享的方法
  handleClick = res => {
    this.setState({
      count: this.state.count + res
    })
  }
  render () {
    return (
      <div>
        <Child1 count={this.state.count}/>
        <Child2 onClick={this.handleClick}/>
      </div>
    )
  }
}

// 导出
export default Father