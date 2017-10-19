Page({
  data: {
    // text:"这是一个页面"
  },

  /**
   * switch开关监听
   */
  listenerSwitch: function (e) {
    console.log('switch类型开关当前状态-----', e.detail.value);

  },
  /**
   * checkbox类型开关监听
   */
  listenerCheckboxSwitch: function (e) {
    console.log('checkbox类型开关当前状态-----', e.detail.value)
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})