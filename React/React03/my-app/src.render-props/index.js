// 引入react
import React from 'react';
import ReactDOM from 'react-dom';

// 导入组件
import Mouse from './mouse'

// 导入图片
import img from './截屏2021-01-17 上午11.31.04.png'

class App extends React.Component{
  constructor (props) {
    super(props)
    this.state = {} 
  }
  render () {
    return (
      <div>
        App
        {/* 此处mouse就是子组件传过来的state */}
        {/* <Mouse render={mouse => {
          // 这个方法里用了子组件传过来的state，并用jsx渲染了出来
          return <p>X:{mouse.x}, Y:{mouse.y}</p>
        }}></Mouse> */}
        <Mouse>
          {mouse => {
          // 这个方法里用了子组件传过来的state，并用jsx渲染了出来
          return <p>X:{mouse.x}, Y:{mouse.y}</p>
        }}
        </Mouse>
        {/* <Mouse render={mouse => {
          return <img src={img} alt="wx" style={{
            position: "absolute",
            top: mouse.y,
            left: mouse.x
          }}></img>
        }}></Mouse> */}
        <Mouse>
          {mouse => {
            return <img src={img} alt="wx" style={{
              position: "absolute",
              top: mouse.y,
              left: mouse.x
            }}></img>
          }}
        </Mouse>
      </div>
    )
  }
}


// 渲染react元素
ReactDOM.render(<App />, document.getElementById('root'))