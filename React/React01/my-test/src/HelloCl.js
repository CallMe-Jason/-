// 把组件抽离为独立的JS文件
// 导入react
import React from 'react'

// 创建类组件
class HelloCl extends React.Component{
  // 类组件中的state
  constructor () {
    super()
    // state增加1的第二种方法，在constructor中更改this指向
    this.handlerBtn2 = this.handlerBtn2.bind(this)
    console.log(this.handlerBtn2)
    this.state = {
      count: 0
    }
  }
  // 类组件的方法
  handler() {
    alert('触发了类组件的事件')
  }

  // state增加1的第一种方法，在触发事件后写箭头函数
  handlerBtn1 () {
    console.log(this)
    this.setState({
      count: this.state.count + 1
    })
  }

  // state增加1的第二种方法，在constructor中更改this指向
  handlerBtn2 () {
    console.log(this)
    this.setState({
      count: this.state.count + 1
    })
  }

  // state增加1的第三种方法，class实例方法
  handlerBtn3 = () => {
    console.log(this)
    this.setState({
      count: this.state.count + 1
    })
  }

  render () {
    return (
      <div>
        抽离出来的类组件
        <button onClick={this.handler}>点击触发类组件的事件</button>
        <div>类组件中显示state数据:{this.state.count}</div>
        <button onClick={ () => this.handlerBtn1()}>类组件中的数据自增一的第一种方法</button>
        <button onClick={this.handlerBtn2}>类组件中的数据自增一的第二种方法</button>
        <button onClick={this.handlerBtn3}>类组件中的数据自增一的第三种方法</button>

      </div>
    )
  }
}

// 导出
export default HelloCl

// 在class类中使用变量或者方法必须要写this,这个this是指向constructor的
// 在第一种方法中，按钮触发了箭头函数，箭头函数的this指向了constructor，从而找到了方法名，而方法中的this又指回了箭头函数中的this，也就是指向constructor的this
// 在第二种方法中，按钮触发了方法，因为是在类里，所以要写this,而方法在constructor中通过bind改变了其内部的this指向，也就是指向了constructor
// 在第三种方法中，按钮触发了方法，因为是在类里，所以要写this,而方法是声明在类里的箭头函数，所以里面的this指向了constructor