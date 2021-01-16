 // 导入react
 import React from 'react'


// const { Consumer } = React.createContext()
// import { Consumer } from './index'
// 导入context方法
import ContextApp from './context'


 class Child2 extends React.Component{
   // 子组件传值的方法
   handler = () => {
     this.props.onClick(1)
   }
   render () {
     return (
       <div>
        <button onClick={this.handler}>+1</button>
        <br />
        <ContextApp.Consumer>
          {info => {
            return (
              <span>{info}</span>
            )
          }}
        </ContextApp.Consumer>
       </div>
       
     )
   }
 }
 
 export default Child2