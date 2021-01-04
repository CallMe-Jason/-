// 在这个js文件中创建store对象
import { observable, action } from 'mobx-miniprogram'

export const store = observable({
  // 数据字段
  numA: 1,
  numB: 2,
  activeTabBarIndex: 0,
  // 计算属性
  get sum() {
    return this.numA + this.numB
  },
  // actions方法，用来修改store中的数据
  updateNum1: action((step) => {
    store.numA += step
    console.log(this, 'hahahah')
  }),
  updateNum2: action(function (step){
    this.numB += step
  }),
  updateActiveTabBarIndex: action(function (index) {
    this.activeTabBarIndex = index
  })
})