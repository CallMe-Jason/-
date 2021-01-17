// 引入react
import React from 'react'

// 表单校验
import propTypes from 'prop-types'

// 创建类组件
class Mouse extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      x: 0,
      y: 0
    }
  }

  // 鼠标移动事件
  mouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  //监听鼠标移动事件
  componentDidMount () {
    window.addEventListener('mousemove', this.mouseMove)
  }

  // 解绑事件
  componentWillUnmount () {
    window.removeEventListener('mousemove', this.mouseMove)
  }
  render () {
    // 向外界提供当前子组件里面的数据
    // return this.props.render(this.state)
    return this.props.children(this.state)
  }
}

// 校验
Mouse.propTypes = {
  children: propTypes.func.isRequired
}

// 导出
export default Mouse