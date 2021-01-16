 // 导入react
import React from 'react'

class Child1 extends React.Component{
  render () {
    return (
      <div>计数器: {this.props.count}</div>
    )
  }
}

export default Child1