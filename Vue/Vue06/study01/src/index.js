import $ from 'jquery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'
import App from './components/App.vue'

$(function(){
    $('li:odd').css('backgroundColor','blue')
    $('li:even').css('backgroundColor','red')
})
class Person {
    static info = 'aaa'
}
console.log(Person.info);

//-------------------------------------------------------------
import Vue from 'vue'
//导入单文件组件
import app from './components/App.vue'

const vm = new Vue({
    el:'#app',
    render:h=>h(App)
})