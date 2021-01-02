// pages/day2/day2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '没事干',
    arr: ['苹果', '鸭梨', '山楂'],
    imgSrc: 'http://www.itheima.com/images/logo.png',
    randomNum1: Math.random() * 10,
    count: 0,
    flag: false
  },
  btnhandler(e) {
    console.log(e)
  },
  btnhandler1() {
    this.setData({
      count: this.data.count + 1,
      randomNum1: Math.random() * 10,
      arr: this.data.arr + ',香蕉',
      flag: !this.data.flag
    })
  },
  inputHandler (e) {
    console.log(e.detail.value)
    this.setData({
      msg: e.detail.value
    })
  },
  handler (e) {
    console.log(e.target.dataset)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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