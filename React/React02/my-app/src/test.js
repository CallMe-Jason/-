// 导入react
import React from 'react';

// 导入组件
import Father from './Father'

// 创建类组件
class Title extends React.Component{
  constructor (props) {
    super(props)
    // 非受控组件的方式创建的ref
    console.log(this.props, '构造函数')
    this.txtRef = React.createRef()
    this.state = {
      txt: '',
      content: '',
      city: 'bj',
      isChecked: false,
      childMsg: '这是子组件向父组件传递的值'
    }
  }

  // 多表单元素变化的事件
  handlerForm = e => {
    // 获取DOM元素
    const target = e.target
    // 获取类型获取值
    const value = target.type === 'checkbox' ? target.checked : target.value
    //  获取name
    const name = target.name
    // 改值
    this.setState({
      [name]: value
    })
  }

  // 向父组件传值
  handleClick = () => {
    this.props.getMsg(this.state.childMsg)
  }

  // 获取文本的值
  getTxt = () => {
    console.log(this.txtRef.current.value)
  }

  // // 输入表单的事件
  // handlerChange = e => {
  //   this.setState({
  //     txt: e.target.value
  //   })
  // }

  // // 富文本的事件
  // handlerContent = e => {
  //   this.setState({
  //     content: e.target.value
  //   })
  // }
  
  // // 下拉框的事件
  // handlerCity = e => {
  //   this.setState({
  //     city: e.target.value
  //   })
  // }

  // // 复选框的事件
  // handlerChecked = e => {
  //   this.setState({
  //     isChecked: e.target.checked
  //   })
  // }
  render() {
    return (
      <div>
        {/* 输入框 */}
        {/* props的默认值 */}
        props的默认值：{this.props.gender}
        <br />
        <input type="text" ref={this.txtRef} />
        <button onClick={this.getTxt}>获取元素</button>
        <br />
        {/* 富文本 */}
        <textarea onChange={this.handlerForm} name="content" />
        <br />
        {/* 下拉 */}
        <select onChange={this.handlerForm} name="city">
          <option value="bj">北京</option>
          <option value="sh">上海</option>
          <option value="gz">广州</option>
        </select>
        <br />
        {/* 复选框 */}
        <input type="checkbox" onChange={this.handlerForm} name="isChecked"></input>
        <div>组件接收的值:{this.props.name}</div>
        <button onClick={this.handleClick}>向父组件传值: React</button>
        {/* 兄弟组件传值 */}
        <Father />
      </div>
    )
  }
}

// 导出
export default Title