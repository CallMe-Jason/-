// 引入react
import React from 'react'
import ReactDOM from 'react-dom'

// 引入css
import './index.css'

// 引入表单校验的包
import propTypes from 'prop-types'

// 引入组件
import Title from './test'

// const { Provider } = React.createContext()
// 引入context方法
import ContextApp from './context'

// 创建函数组件
function Jason() {
  return (
    <span>这是props的children</span>
  )
}

function Hello (props) {
  return (
    console.log(props.list, '函数组件接收父组件传递过来的数组'),
    <div>
      {props.children()}
      {
        props.list.map(item => (
          <div key={item.id}>
            <span>{item.name}</span>
            <br />
          </div>
        ))
      }
    </div>
  )
}

// 创建类组件
class App extends React.Component{
  constructor () {
    super()
    this.state = {
      comments: JSON.parse(window.localStorage.getItem('userInfo')) || 
      [
        { id: 1, name: 'jack', content: '沙发！！！' },
        { id: 2, name: 'rose', content: '板凳~' },
        { id: 3, name: 'tom', content: '楼主好人' }
      ],
      username: '',
      userContent: ''
    }
  }
  // 点击提交
  handleClick = () => {
    const { comments, username, userContent } = this.state
    // 非空校验
    if (username.trim() === '' || userContent.trim() === '') return alert('请将信息输入完整！')
    const newComments = [
      {
        id: comments.length + 1,
        name: username,
        content: userContent
      },
      ...comments
    ]
    this.setState({
      comments: newComments,
      username: '',
      userContent: ''
    })
    window.localStorage.setItem('userInfo', JSON.stringify(newComments))
  }

  // 获取表单元素的方法
  handleForm = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  // 渲染列表数据的方法
  renderList = () => {
      if (this.state.comments.length === 0 ) {
        return (<div className="no-comment">暂无评论，快去评论吧~</div>) 
      } 
        return ( <ul>
          {
            this.state.comments.map(item => (
            <li key={item.id}>
            <h3>评论人：{item.name}</h3>
            <p>评论内容：{item.content}</p>
          </li>
            ))
          }
        </ul>)
  }

  // 用于子组件向父组件传值的回调函数
  getChildMsg = msg => {
    console.log(msg)
  }
  
  render () {
    return (
      <div className="app">
        {this.props.children}
        <div>
          <input className="user" type="text" placeholder="请输入评论人" name="username" onChange={this.handleForm} value={this.state.username} />
          <br />
          <textarea
            className="content"
            cols="30"
            rows="10"
            placeholder="请输入评论内容"
            name="userContent"
            onChange={this.handleForm}
            value={this.state.userContent}
          />
          <br />
          <button onClick={this.handleClick}>发表评论</button>
        </div>

        {/* 通过条件渲染决定渲染什么内容 */}
        {/* {
          this.state.comments.length === 0 
          ? (<div className="no-comment">暂无评论，快去评论吧~</div>) 
          : ( <ul>
              {
                this.state.comments.map(item => (
                <li key={item.id}>
                <h3>评论人：{item.name}</h3>
                <p>评论内容：{item.content}</p>
              </li>
                ))
              }
           </ul>)
        } */}
        {this.renderList()}
        {/* 向子组件传递一个回调函数让子组件向父组件传值 */}
        <Hello age={10} list={this.state.comments}>
          {() => console.log('这是props的children属性的函数111111')}
        </ Hello>
        <ContextApp.Provider value="red">
          <div>
            <Title name="zs" age="10" getMsg={this.getChildMsg} />
          </div>
        </ContextApp.Provider>
      </div>
    ) 
  }
}

// 传值校验
Title.propTypes = {
  name: propTypes.string
}
// 默认值
Title.defaultProps = {
  gender: '男'
}

// 渲染react元素
ReactDOM.render(<App><Jason /></App>, document.getElementById('root'))

