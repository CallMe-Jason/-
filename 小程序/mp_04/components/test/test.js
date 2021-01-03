// components/test/test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // max: Number // 简化的方式接收值，无法指定默认值
    max: { // 完整写法
      type: Number, // 指定类型
      value: 29 // 默认值
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showInfo() {
      console.log(this.data === this.properties);
    },
    // 点击事件的处理函数
    addCount () {
      if (this.data.count >= this.properties.max) return // 控制自增的最大值为9
      this.setData({
        count: this.data.count + 1,
        max: this.properties.max + 1
      })
      this._showCount()
    },
    _showCount() {
      wx.showToast({
        title: 'count值为' + this.data.count,
        icon: 'none'
      })
    }
  }
})
