// 引入react
import React from 'react'

// 创建有状态组件
class StateComponent extends React.Component {
  // 正常写法
  // constructor () {
  //   super ()
  //   // 修改this指向
  //   this.clickDouble = this.clickDouble.bind(this)
  //   this.state = {
  //     count: 0
  //   }
  // }
  // 简写
  state = {
    count: 101
  }

  // 把事件处理函数抽离出来
  clickDouble = () => {
    this.setState({
      count: this.state.count + 2
    })
  }

  render () {
    return (<div>
      <h1>计算器： {this.state.count}</h1>
      <button onClick={() => {
        this.setState({
          count: this.state.count + 1
        })
      }}>+1</button>
      <button onClick={this.clickDouble}>+2</button>
    </div>)
  }
}

// 导出组件
export default StateComponent