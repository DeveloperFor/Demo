// pages/progress/progress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 30
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  progressNum: function () {
    this.setData({
      num: 40
    })
  }
})