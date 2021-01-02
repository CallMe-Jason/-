// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 存放轮播图数据的列表
    swiperList: [],
    // 存放九宫格数据的列表
    gridList: []
  },
  gotoInfo () {
    wx.navigateTo({
      url: '/pages/info/info'
    })
  },
  gotoMessage() {
    wx.switchTab({
      url: '/pages/message/message'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getSwiperList()
      this.getGridList()
  },
// 获取轮播图数据的方法
getSwiperList(){
  wx.request({
    url: 'https://www.escook.cn/slides',
    method: 'GET',
    success: (res) => {
      // console.log(res)
      this.setData({
        swiperList: res.data
      })
    }
  })
},
// 获取九宫格数据的请求
getGridList(){
  wx.request({
    url: 'https://www.escook.cn/categories',
    method: 'GET',
    success: (res) => {
        this.setData({
          gridList: res.data
        })
    }
  })
},
gotoInfo2 () {
  wx.navigateTo({
    url: '/pages/info/info?name=ls&gender=男'
  })
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})