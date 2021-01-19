// 导入react
import React from 'react';
import ReactDOM from 'react-dom';

// 导入router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// 创建函数组件
const First = props => {
  const handler = () => {
    props.history.push('/second')
  }
  return (
    <div>
    <p>登录组件</p>
    <button onClick={handler}>登录</button>
    </div>
  )
}

const Second = props => {
  const handler = () => {
    props.history.go(-1)
  }
  return (
    <div>
      <p>首页</p>
      <button onClick={handler}>返回</button>
    </div>
  )
}

// 创建类纯组件
class App extends React.PureComponent {
// class App extends React.Component {
  state = {
    number: 0
  }
  handleClick = () => {
    this.setState(() => {
      return {
        number: Math.floor(Math.random() * 3)
      }
    })
  }

  // // 因为两次生成随机数据的可能相同，如果相同，此时，不需要渲染
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('最新状态:', nextState, '当前状态:', this.state)
  //   if (nextState.number !== this.state.number) {
  //     // 状态不同，更新DOM
  //     return true
  //   }
  //   // 状态不同，不更新
  //   return false
  // }

  render () {
    console.log('render')
    return (
      <div>
         随机数: {this.state.number}
            <br />
            <button onClick={this.handleClick}>生成随机数</button>
            <br />
        <Router>
            <Link to="/first">去登录页面</Link>
            <Route path="/first" component={First}></Route>
            <Route path="/second" component={Second}></Route>
        </Router>
      </div>
    )
  }
}

// 渲染react元素
ReactDOM.render(<App />, document.getElementById('root'))