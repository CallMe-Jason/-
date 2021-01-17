// 导入react
import React from 'react'
import ReactDOM from 'react-dom'

// 导入图片
import img from './logo.svg'

// 创建一个函数，约定with开头
function withMouse (WrappedComponent) {
  // 在内部创建类组件，提供复用的状态逻辑代码
  class Mouse extends React.Component {
    state = {
      x: 0,
      y: 0
    }
    // 控制鼠标状态的逻辑
    componentDidMount () {
      window.addEventListener("mousemove", this.handleMouseMove)
    }

    // 解绑
    componentWillUnmount () {
      window.removeEventListener("mousemove", this.handleMouseMove)
    }

    // 事件
    handleMouseMove = e => {
      this.setState({
        x: e.clientX - 700,
        y: e.clientY - 450
      })
    }    

    render () {
      return <WrappedComponent {...this.state} {...this.props} />
    }
  }

  // 设置displayName
  Mouse.displayName = `WithMouse${getDisplayName(WrappedComponent)}`

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
  }

  return Mouse
}

// 用来测试高阶组件的组件
const Position = props => (
  <p>
    鼠标当前位置: (x: {props.x}, y: {props.y})
  </p>
)

// wx
const wx = props => (
   <img src={img} alt="wx" style={{
    position: "absolute",
    top: props.y,
    left: props.x
  }}></img>
)

// 使用高阶组件增强该组件
const MousePosition = withMouse(Position) 
const MouseWx = withMouse(wx) 

// 创建类组件
class App extends React.Component {
  render () {
    return (
      <div>
        <h1>高阶组件</h1>
        <MousePosition></MousePosition>
        <MouseWx></MouseWx>
      </div>
    )
  }
}

// 渲染react元素
ReactDOM.render(<App />, document.getElementById('root'))
