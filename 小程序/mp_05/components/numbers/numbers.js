import { storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'

// components/numbers/numbers.js
Component({
  behaviors: [storeBindingsBehavior], // 通过storeBindingsBehavior 来实现自动绑定
  storeBindings: {
    store,
    fields: {
      numA: 'numA',
      numB: 'numB',
      sum: 'sum'
    },
    actions: {
      updateNum2: 'updateNum2'
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    btnHandler1 (e) {
      this.updateNum2(e.target.dataset.step)
    }
  }
})
